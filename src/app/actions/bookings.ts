'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/dal';
import { torontoNowAsUTC } from '@/lib/time';

/** Error values are translation keys under translations.account.classes.errors. */
export type BookingFormState = { error?: string; success?: boolean } | undefined;

// Bookable start times, Toronto time.
const MIN_HOUR = 9;
const MAX_HOUR = 20;

class BookingError extends Error {
  constructor(readonly key: string) {
    super(key);
  }
}

/** Parses "YYYY-MM-DD" + "HH:00" into the wall-clock-as-UTC encoding. */
function parseSlot(dateStr: string, timeStr: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr) || !/^\d{2}:00$/.test(timeStr)) return null;
  const [y, m, d] = dateStr.split('-').map(Number);
  const hour = Number(timeStr.slice(0, 2));
  if (hour < MIN_HOUR || hour > MAX_HOUR) return null;
  const slot = new Date(Date.UTC(y, m - 1, d, hour));
  // Reject dates that don't round-trip (e.g. Feb 30).
  if (
    slot.getUTCFullYear() !== y ||
    slot.getUTCMonth() !== m - 1 ||
    slot.getUTCDate() !== d
  ) {
    return null;
  }
  return slot;
}

export async function createBooking(
  _prev: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  const type = String(formData.get('type') ?? '');
  if (type !== 'online' && type !== 'inPerson') return { error: 'invalidSlot' };

  const slot = parseSlot(
    String(formData.get('date') ?? ''),
    String(formData.get('time') ?? ''),
  );
  if (!slot) return { error: 'invalidSlot' };
  if (slot <= torontoNowAsUTC()) return { error: 'pastDate' };

  try {
    await db.$transaction(async (tx) => {
      // One student per time slot (single tutor).
      const clash = await tx.booking.findFirst({
        where: { start: slot, status: 'scheduled' },
      });
      if (clash) throw new BookingError('slotTaken');

      // Spend one credit of the matching type; guarded so it can't go negative.
      const spent = await tx.user.updateMany({
        where: {
          id: user.id,
          ...(type === 'online'
            ? { onlineCredits: { gt: 0 } }
            : { inPersonCredits: { gt: 0 } }),
        },
        data:
          type === 'online'
            ? { onlineCredits: { decrement: 1 } }
            : { inPersonCredits: { decrement: 1 } },
      });
      if (spent.count === 0) throw new BookingError('noCredits');

      await tx.booking.create({ data: { userId: user.id, start: slot, type } });
    });
  } catch (error) {
    if (error instanceof BookingError) return { error: error.key };
    console.error('Failed to create booking:', error);
    return { error: 'generic' };
  }

  revalidatePath('/account');
  return { success: true };
}

export async function cancelBooking(formData: FormData) {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  const bookingId = String(formData.get('bookingId') ?? '');
  if (!bookingId) return;

  try {
    await db.$transaction(async (tx) => {
      const booking = await tx.booking.findUnique({ where: { id: bookingId } });
      if (
        !booking ||
        booking.userId !== user.id ||
        booking.status !== 'scheduled' ||
        booking.start <= torontoNowAsUTC() // past classes can't be canceled
      ) {
        return;
      }
      await tx.booking.update({
        where: { id: bookingId },
        data: { status: 'canceled' },
      });
      // Return the credit to the user's balance.
      await tx.user.update({
        where: { id: user.id },
        data:
          booking.type === 'online'
            ? { onlineCredits: { increment: 1 } }
            : { inPersonCredits: { increment: 1 } },
      });
    });
  } catch (error) {
    console.error('Failed to cancel booking:', error);
  }

  revalidatePath('/account');
}
