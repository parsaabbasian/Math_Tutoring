'use server';

import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { createSession, deleteSession } from '@/lib/session';

/**
 * Field errors carry translation keys (see translations.auth.errors),
 * so the client can render them in the visitor's language.
 */
export type AuthFormState =
  | {
      errors?: {
        name?: string;
        email?: string;
        password?: string;
        form?: string;
      };
    }
  | undefined;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export async function signup(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const password = String(formData.get('password') ?? '');

  const errors: NonNullable<AuthFormState>['errors'] = {};
  if (name.length < 2) errors.name = 'nameRequired';
  if (!EMAIL_RE.test(email)) errors.email = 'invalidEmail';
  if (password.length < MIN_PASSWORD_LENGTH) errors.password = 'passwordTooShort';
  if (Object.keys(errors).length > 0) return { errors };

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) return { errors: { email: 'emailTaken' } };

  let userId: string;
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await db.user.create({ data: { name, email, passwordHash } });
    userId = user.id;
  } catch {
    return { errors: { form: 'generic' } };
  }

  await createSession(userId);
  redirect('/account');
}

export async function login(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const password = String(formData.get('password') ?? '');

  if (!EMAIL_RE.test(email) || password.length === 0) {
    return { errors: { form: 'invalidCredentials' } };
  }

  const user = await db.user.findUnique({ where: { email } });
  if (!user) return { errors: { form: 'invalidCredentials' } };

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return { errors: { form: 'invalidCredentials' } };

  await createSession(user.id);
  redirect('/account');
}

export async function logout() {
  await deleteSession();
  redirect('/');
}
