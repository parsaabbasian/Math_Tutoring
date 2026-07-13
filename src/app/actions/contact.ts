'use server';

import { db } from '@/lib/db';
import { readSession } from '@/lib/session';

export type ContactSubmissionInput = {
  studentName: string;
  email: string;
  phone: string;
  country: string;
  gradeLevel: string;
  tutoringType: string;
  address?: string;
  postalCode?: string;
  language?: string;
};

const clip = (value: unknown, max: number) => String(value ?? '').trim().slice(0, max);

/**
 * Stores a registration-form submission. Linked to the logged-in user when
 * there is one; anonymous submissions are stored too.
 */
export async function saveContactSubmission(input: ContactSubmissionInput) {
  const studentName = clip(input.studentName, 120);
  const email = clip(input.email, 200);
  const phone = clip(input.phone, 40);
  if (!studentName || !email || !phone) return { ok: false };

  try {
    const session = await readSession();
    await db.contactSubmission.create({
      data: {
        userId: session?.userId ?? null,
        studentName,
        email,
        phone,
        country: clip(input.country, 80),
        gradeLevel: clip(input.gradeLevel, 120),
        tutoringType: clip(input.tutoringType, 20),
        address: clip(input.address, 300) || null,
        postalCode: clip(input.postalCode, 12) || null,
        language: input.language === 'fa' ? 'fa' : 'en',
      },
    });
    return { ok: true };
  } catch (error) {
    console.error('Failed to save contact submission:', error);
    return { ok: false };
  }
}
