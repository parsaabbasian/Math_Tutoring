import 'server-only';
import Stripe from 'stripe';

let stripe: Stripe | null | undefined;

/** Returns the Stripe client, or null when STRIPE_SECRET_KEY isn't configured. */
export function getStripe(): Stripe | null {
  if (stripe === undefined) {
    const key = process.env.STRIPE_SECRET_KEY;
    stripe = key ? new Stripe(key) : null;
  }
  return stripe;
}

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}
