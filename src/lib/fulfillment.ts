import 'server-only';
import type Stripe from 'stripe';
import { db } from './db';
import { CURRENCY, PRODUCTS, isProductKey } from './products';

/**
 * Records a paid Stripe Checkout session and credits the user's balance.
 * Called from both the webhook and the /account return page, so it must be
 * idempotent: the unique constraint on Purchase.stripeSessionId guarantees a
 * session is only ever fulfilled once.
 */
export async function fulfillCheckoutSession(
  session: Stripe.Checkout.Session,
): Promise<boolean> {
  if (session.payment_status !== 'paid') return false;

  const userId = session.metadata?.userId;
  const productKey = session.metadata?.productKey ?? '';
  const quantity = Math.floor(Number(session.metadata?.quantity ?? 0));

  if (!userId || !isProductKey(productKey) || quantity < 1) return false;

  try {
    await db.$transaction(async (tx) => {
      await tx.purchase.create({
        data: {
          userId,
          stripeSessionId: session.id,
          productKey,
          quantity,
          amountTotal: session.amount_total ?? PRODUCTS[productKey].unitAmount * quantity,
          currency: session.currency ?? CURRENCY,
        },
      });

      await tx.user.update({
        where: { id: userId },
        data:
          productKey === 'inPerson'
            ? { inPersonCredits: { increment: quantity } }
            : productKey === 'online'
              ? { onlineCredits: { increment: quantity } }
              : // trial: one online session + mark the trial as used
                { onlineCredits: { increment: quantity }, trialUsed: true },
      });
    });
    return true;
  } catch (error) {
    // P2002 = unique constraint hit: this session was already fulfilled.
    if ((error as { code?: string }).code === 'P2002') return false;
    throw error;
  }
}
