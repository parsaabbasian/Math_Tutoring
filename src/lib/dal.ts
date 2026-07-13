import 'server-only';
import { cache } from 'react';
import { redirect } from 'next/navigation';
import { db } from './db';
import { readSession } from './session';

/**
 * Returns the logged-in user (safe fields only) or null.
 * Memoized per request via React cache.
 */
export const getCurrentUser = cache(async () => {
  const session = await readSession();
  if (!session) return null;
  return db.user.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      email: true,
      name: true,
      onlineCredits: true,
      inPersonCredits: true,
      trialUsed: true,
      createdAt: true,
    },
  });
});

/** Like getCurrentUser, but redirects to /login when not authenticated. */
export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect('/login');
  return user;
}
