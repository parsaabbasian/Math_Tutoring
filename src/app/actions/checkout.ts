'use server';

import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/dal';
import { getStripe } from '@/lib/stripe';
import { CURRENCY, PRODUCTS, isProductKey } from '@/lib/products';

/** Error values are translation keys under translations.account. */
export type CheckoutState = { error?: string } | undefined;

export async function startCheckout(
  _prev: CheckoutState,
  formData: FormData,
): Promise<CheckoutState> {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  const productKey = String(formData.get('product') ?? '');
  if (!isProductKey(productKey)) return { error: 'checkoutError' };
  const product = PRODUCTS[productKey];

  let quantity = Math.floor(Number(formData.get('quantity') ?? 1));
  if (!Number.isFinite(quantity) || quantity < 1) quantity = 1;
  quantity = Math.min(quantity, product.maxQuantity);

  if (productKey === 'trial' && user.trialUsed) {
    return { error: 'trialUsedNote' };
  }

  const stripe = getStripe();
  if (!stripe) return { error: 'paymentsNotConfigured' };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

  let checkoutUrl: string | null = null;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: CURRENCY,
            product_data: { name: product.name },
            unit_amount: product.unitAmount,
          },
          quantity,
        },
      ],
      customer_email: user.email,
      metadata: {
        userId: user.id,
        productKey,
        quantity: String(quantity),
      },
      success_url: `${baseUrl}/account?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/account?checkout=canceled`,
    });
    checkoutUrl = session.url;
  } catch (error) {
    console.error('Stripe checkout session creation failed:', error);
    return { error: 'checkoutError' };
  }

  if (!checkoutUrl) return { error: 'checkoutError' };
  redirect(checkoutUrl);
}
