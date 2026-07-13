import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountDashboard from '../components/AccountDashboard';
import { requireUser } from '@/lib/dal';
import { db } from '@/lib/db';
import { getStripe, isStripeConfigured } from '@/lib/stripe';
import { fulfillCheckoutSession } from '@/lib/fulfillment';

export const metadata: Metadata = {
  title: 'My Account',
  robots: { index: false, follow: false },
};

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string; session_id?: string }>;
}) {
  const params = await searchParams;

  // Fulfill on return from Stripe Checkout. This is a fallback for when the
  // webhook hasn't fired (e.g. local dev without `stripe listen`); the unique
  // constraint on Purchase.stripeSessionId keeps it idempotent either way.
  let banner: 'success' | 'canceled' | null = null;
  if (params.checkout === 'success' && params.session_id) {
    const stripe = getStripe();
    if (stripe) {
      try {
        const session = await stripe.checkout.sessions.retrieve(params.session_id);
        await fulfillCheckoutSession(session);
        if (session.payment_status === 'paid') banner = 'success';
      } catch (error) {
        console.error('Failed to verify checkout session:', error);
      }
    }
  } else if (params.checkout === 'canceled') {
    banner = 'canceled';
  }

  const user = await requireUser();
  const purchases = await db.purchase.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main>
      <Header />
      {/* Offset for the fixed header */}
      <div style={{ paddingTop: '75px' }}>
        <AccountDashboard
          user={{
            name: user.name,
            email: user.email,
            onlineCredits: user.onlineCredits,
            inPersonCredits: user.inPersonCredits,
            trialUsed: user.trialUsed,
            createdAt: user.createdAt.toISOString(),
          }}
          purchases={purchases.map((p) => ({
            id: p.id,
            productKey: p.productKey,
            quantity: p.quantity,
            amountTotal: p.amountTotal,
            currency: p.currency,
            createdAt: p.createdAt.toISOString(),
          }))}
          banner={banner}
          stripeConfigured={isStripeConfigured()}
        />
      </div>
      <Footer />
    </main>
  );
}
