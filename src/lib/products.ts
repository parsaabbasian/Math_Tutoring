export type ProductKey = 'trial' | 'online' | 'inPerson';

export const CURRENCY = 'cad';

/**
 * Prices are defined server-side only (in cents) so the client can never
 * tamper with amounts. Display strings live in translations.account.products.
 */
export const PRODUCTS: Record<
  ProductKey,
  { name: string; unitAmount: number; maxQuantity: number }
> = {
  trial: {
    name: 'Trial Session (Online)',
    unitAmount: 1500,
    maxQuantity: 1,
  },
  online: {
    name: 'Online Tutoring Session',
    unitAmount: 2000,
    maxQuantity: 10,
  },
  inPerson: {
    name: 'In-Person Tutoring Session',
    unitAmount: 3000,
    maxQuantity: 10,
  },
};

export function isProductKey(value: string): value is ProductKey {
  return value in PRODUCTS;
}
