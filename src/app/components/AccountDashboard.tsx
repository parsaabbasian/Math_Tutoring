'use client';
import { useActionState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { logout } from '../actions/auth';
import { startCheckout, type CheckoutState } from '../actions/checkout';
import MyClasses, { type BookingItem } from './MyClasses';
import styles from './AccountDashboard.module.css';

type ProductKey = 'trial' | 'online' | 'inPerson';

type PurchaseItem = {
  id: string;
  productKey: string;
  quantity: number;
  amountTotal: number;
  currency: string;
  createdAt: string;
};

type Props = {
  user: {
    name: string;
    email: string;
    onlineCredits: number;
    inPersonCredits: number;
    trialUsed: boolean;
    createdAt: string;
  };
  purchases: PurchaseItem[];
  bookings: BookingItem[];
  banner: 'success' | 'canceled' | null;
  stripeConfigured: boolean;
};

const QUANTITY_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function formatAmount(amountTotal: number, currency: string) {
  return `$${(amountTotal / 100).toFixed(2)} ${currency.toUpperCase()}`;
}

function ProductCard({
  productKey,
  withQuantity,
  disabled,
  disabledNote,
}: {
  productKey: ProductKey;
  withQuantity: boolean;
  disabled: boolean;
  disabledNote?: string;
}) {
  const { language } = useLanguage();
  const t = translations[language].account;
  const product = t.products[productKey];
  const [state, action, pending] = useActionState<CheckoutState, FormData>(
    startCheckout,
    undefined,
  );

  const errorMessage = state?.error
    ? (t[state.error as keyof typeof t] as string) ?? t.checkoutError
    : null;

  return (
    <div className={styles.productCard}>
      <h4 className={styles.productTitle}>{product.title}</h4>
      <p className={styles.productPrice}>{product.price}</p>
      <p className={styles.productDesc}>{product.desc}</p>

      <form action={action} className={styles.productForm}>
        <input type="hidden" name="product" value={productKey} />
        {withQuantity && (
          <label className={styles.quantityLabel}>
            {t.quantity}
            <select name="quantity" className={styles.quantitySelect} defaultValue={1}>
              {QUANTITY_OPTIONS.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </label>
        )}
        <button
          type="submit"
          className={`btn-primary ${styles.checkoutButton}`}
          disabled={disabled || pending}
        >
          {pending ? t.redirecting : t.checkout}
        </button>
      </form>

      {disabledNote && <p className={styles.productNote}>{disabledNote}</p>}
      {errorMessage && <p className={styles.productError}>{errorMessage}</p>}
    </div>
  );
}

export default function AccountDashboard({
  user,
  purchases,
  bookings,
  banner,
  stripeConfigured,
}: Props) {
  const { language, isRTL } = useLanguage();
  const t = translations[language].account;

  const locale = language === 'fa' ? 'fa-IR' : 'en-CA';
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });

  const productTitle = (key: string) =>
    key in t.products ? t.products[key as ProductKey].title : key;

  return (
    <section className={`section ${styles.account}`}>
      <div className="container" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className={`${styles.topRow} fade-in`}>
          <div>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.greeting}>
              {t.greeting}, <strong>{user.name}</strong>{' '}
              <span className={styles.email} dir="ltr">({user.email})</span>
            </p>
            <p className={styles.memberSince}>
              {t.memberSince} {formatDate(user.createdAt)}
            </p>
          </div>
          <form action={logout}>
            <button type="submit" className={`btn-outline ${styles.logoutButton}`}>
              {t.logout}
            </button>
          </form>
        </div>

        {banner === 'success' && (
          <div className={`${styles.banner} ${styles.bannerSuccess}`} role="status">
            {t.purchaseSuccess}
          </div>
        )}
        {banner === 'canceled' && (
          <div className={`${styles.banner} ${styles.bannerCanceled}`} role="status">
            {t.purchaseCanceled}
          </div>
        )}

        <div className={`${styles.card} fade-in`}>
          <h3 className={styles.cardTitle}>{t.balancesTitle}</h3>
          <div className={styles.balances}>
            <div className={styles.balanceItem}>
              <span className={styles.balanceNumber}>{user.onlineCredits}</span>
              <span className={styles.balanceLabel}>{t.onlineSessions}</span>
            </div>
            <div className={styles.balanceItem}>
              <span className={styles.balanceNumber}>{user.inPersonCredits}</span>
              <span className={styles.balanceLabel}>{t.inPersonSessions}</span>
            </div>
          </div>
          <p className={styles.balancesNote}>{t.balancesNote}</p>
        </div>

        <div className={`${styles.card} fade-in`}>
          <h3 className={styles.cardTitle}>{t.classes.title}</h3>
          <p className={styles.buyIntro}>{t.classes.intro}</p>
          <MyClasses
            bookings={bookings}
            onlineCredits={user.onlineCredits}
            inPersonCredits={user.inPersonCredits}
          />
        </div>

        <div id="buy" className={`${styles.card} fade-in`}>
          <h3 className={styles.cardTitle}>{t.buyTitle}</h3>
          <p className={styles.buyIntro}>{t.buyIntro}</p>
          {!stripeConfigured && (
            <div className={`${styles.banner} ${styles.bannerCanceled}`}>
              {t.paymentsNotConfigured}
            </div>
          )}
          <div className={styles.productGrid}>
            <ProductCard
              productKey="trial"
              withQuantity={false}
              disabled={!stripeConfigured || user.trialUsed}
              disabledNote={user.trialUsed ? t.trialUsedNote : undefined}
            />
            <ProductCard
              productKey="online"
              withQuantity
              disabled={!stripeConfigured}
            />
            <ProductCard
              productKey="inPerson"
              withQuantity
              disabled={!stripeConfigured}
            />
          </div>
        </div>

        <div className={`${styles.card} fade-in`}>
          <h3 className={styles.cardTitle}>{t.historyTitle}</h3>
          {purchases.length === 0 ? (
            <p className={styles.historyEmpty}>{t.historyEmpty}</p>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>{t.historyDate}</th>
                    <th>{t.historyItem}</th>
                    <th>{t.historyQty}</th>
                    <th>{t.historyAmount}</th>
                  </tr>
                </thead>
                <tbody>
                  {purchases.map((p) => (
                    <tr key={p.id}>
                      <td>{formatDate(p.createdAt)}</td>
                      <td>{productTitle(p.productKey)}</td>
                      <td>{p.quantity}</td>
                      <td dir="ltr">{formatAmount(p.amountTotal, p.currency)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
