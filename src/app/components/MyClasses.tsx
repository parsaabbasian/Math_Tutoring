'use client';
import { useActionState, useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { cancelBooking, createBooking, type BookingFormState } from '../actions/bookings';
import styles from './MyClasses.module.css';

export type BookingItem = {
  id: string;
  /** ISO string of the class start (Toronto wall time encoded as UTC). */
  start: string;
  type: string; // online | inPerson
};

type Props = {
  bookings: BookingItem[]; // scheduled, sorted ascending
  onlineCredits: number;
  inPersonCredits: number;
};

const TORONTO_TZ = 'America/Toronto';
// Bookable start times (must match MIN_HOUR/MAX_HOUR in actions/bookings.ts).
const TIME_SLOTS = Array.from({ length: 12 }, (_, i) => `${String(i + 9).padStart(2, '0')}:00`);

/** Today's date in Toronto as YYYY-MM-DD (en-CA formats exactly that way). */
function torontoTodayISO(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: TORONTO_TZ }).format(new Date());
}

/** Current Toronto wall time as "YYYY-MM-DDTHH:mm" for string comparison with booking ISO. */
function torontoNowKey(): string {
  const date = new Intl.DateTimeFormat('en-CA', { timeZone: TORONTO_TZ }).format(new Date());
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: TORONTO_TZ,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());
  return `${date}T${time}`;
}

function CalendarGrid({
  bookedDays,
  selectedDate,
  onSelectDay,
}: {
  bookedDays: Set<string>;
  selectedDate: string;
  onSelectDay: (iso: string) => void;
}) {
  const { language, isRTL } = useLanguage();
  const t = translations[language].account.classes;
  // Force the Gregorian calendar so grid math and labels agree in Farsi too.
  const locale = language === 'fa' ? 'fa-IR-u-ca-gregory' : 'en-CA';

  const todayIso = torontoTodayISO();
  const [view, setView] = useState({
    year: Number(todayIso.slice(0, 4)),
    month: Number(todayIso.slice(5, 7)) - 1,
  });

  const weekStart = language === 'fa' ? 6 : 0; // fa weeks start Saturday, en Sunday
  const digits = useMemo(() => new Intl.NumberFormat(locale), [locale]);

  const monthLabel = new Date(Date.UTC(view.year, view.month, 1)).toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  const weekdayLabels = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const dayIdx = (weekStart + i) % 7;
        // 2026-01-04 was a Sunday; offset from it to get each weekday name.
        return new Date(Date.UTC(2026, 0, 4 + dayIdx)).toLocaleDateString(locale, {
          weekday: 'narrow',
          timeZone: 'UTC',
        });
      }),
    [locale, weekStart],
  );

  const firstWeekday = new Date(Date.UTC(view.year, view.month, 1)).getUTCDay();
  const leading = (firstWeekday - weekStart + 7) % 7;
  const daysInMonth = new Date(Date.UTC(view.year, view.month + 1, 0)).getUTCDate();
  const dayIso = (day: number) =>
    `${view.year}-${String(view.month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  const changeMonth = (delta: number) =>
    setView(({ year, month }) => {
      const next = new Date(Date.UTC(year, month + delta, 1));
      return { year: next.getUTCFullYear(), month: next.getUTCMonth() };
    });

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <button
          type="button"
          className={styles.monthNav}
          onClick={() => changeMonth(-1)}
          aria-label="Previous month"
        >
          {isRTL ? '›' : '‹'}
        </button>
        <span className={styles.monthLabel}>{monthLabel}</span>
        <button
          type="button"
          className={styles.monthNav}
          onClick={() => changeMonth(1)}
          aria-label="Next month"
        >
          {isRTL ? '‹' : '›'}
        </button>
      </div>

      <div className={styles.grid}>
        {weekdayLabels.map((label, i) => (
          <span key={`w${i}`} className={styles.weekday}>{label}</span>
        ))}
        {Array.from({ length: leading }, (_, i) => (
          <span key={`e${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const iso = dayIso(day);
          const isPast = iso < todayIso;
          const classNames = [
            styles.day,
            iso === todayIso ? styles.today : '',
            bookedDays.has(iso) ? styles.hasClass : '',
            iso === selectedDate ? styles.selected : '',
            isPast ? styles.past : '',
          ]
            .filter(Boolean)
            .join(' ');
          return (
            <button
              key={iso}
              type="button"
              className={classNames}
              disabled={isPast}
              onClick={() => onSelectDay(iso)}
            >
              {digits.format(day)}
              {bookedDays.has(iso) && <span className={styles.dot} aria-hidden="true" />}
            </button>
          );
        })}
      </div>

      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.legendToday}`} /> {t.legendToday}
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.legendClass}`} /> {t.legendClass}
        </span>
      </div>
    </div>
  );
}

export default function MyClasses({ bookings, onlineCredits, inPersonCredits }: Props) {
  const { language, isRTL } = useLanguage();
  const t = translations[language].account.classes;
  const locale = language === 'fa' ? 'fa-IR-u-ca-gregory' : 'en-CA';

  const [state, action, pending] = useActionState<BookingFormState, FormData>(
    createBooking,
    undefined,
  );
  const [selectedDate, setSelectedDate] = useState('');

  const totalCredits = onlineCredits + inPersonCredits;
  const bookedDays = useMemo(
    () => new Set(bookings.map((b) => b.start.slice(0, 10))),
    [bookings],
  );
  const nowKey = torontoNowKey();
  const upcoming = bookings.filter((b) => b.start.slice(0, 16) > nowKey);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(locale, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    });
  const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: language !== 'fa',
      timeZone: 'UTC',
    });
  const typeLabel = (type: string) => (type === 'inPerson' ? t.inPersonOption : t.onlineOption);
  const errorMessage = state?.error
    ? t.errors[state.error as keyof typeof t.errors] ?? t.errors.generic
    : null;

  return (
    <div className={styles.layout} dir={isRTL ? 'rtl' : 'ltr'}>
      <CalendarGrid
        bookedDays={bookedDays}
        selectedDate={selectedDate}
        onSelectDay={setSelectedDate}
      />

      <div className={styles.side}>
        <h4 className={styles.sideTitle}>{t.bookTitle}</h4>

        {totalCredits === 0 ? (
          <p className={styles.needCredits}>
            {t.needCredits} <a href="#buy">{t.needCreditsLink}</a>
          </p>
        ) : (
          <form action={action} className={styles.bookForm}>
            <label className={styles.fieldLabel}>
              {t.typeLabel}
              <select name="type" className={styles.field} defaultValue="online">
                <option value="online">
                  {t.onlineOption} ({onlineCredits} {t.creditsSuffix})
                </option>
                <option value="inPerson">
                  {t.inPersonOption} ({inPersonCredits} {t.creditsSuffix})
                </option>
              </select>
            </label>
            <label className={styles.fieldLabel}>
              {t.dateLabel}
              <input
                type="date"
                name="date"
                required
                className={styles.field}
                min={torontoTodayISO()}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                dir="ltr"
              />
            </label>
            <label className={styles.fieldLabel}>
              {t.timeLabel}
              <select name="time" className={styles.field} defaultValue="16:00" dir="ltr">
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </label>
            <button type="submit" className={`btn-primary ${styles.bookButton}`} disabled={pending}>
              {pending ? t.booking : t.bookButton}
            </button>
            {state?.success && <p className={styles.success} role="status">{t.booked}</p>}
            {errorMessage && <p className={styles.error} role="alert">{errorMessage}</p>}
            <p className={styles.tzNote}>{t.timezoneNote}</p>
          </form>
        )}

        <h4 className={styles.sideTitle}>{t.upcomingTitle}</h4>
        {upcoming.length === 0 ? (
          <p className={styles.noUpcoming}>{t.noUpcoming}</p>
        ) : (
          <ul className={styles.upcomingList}>
            {upcoming.map((b) => (
              <li key={b.id} className={styles.upcomingItem}>
                <div>
                  <span className={styles.upcomingDate}>{formatDate(b.start)}</span>
                  <span className={styles.upcomingMeta} dir="ltr">{formatTime(b.start)}</span>
                  <span className={styles.upcomingType}>{typeLabel(b.type)}</span>
                </div>
                <form
                  action={cancelBooking}
                  onSubmit={(e) => {
                    if (!window.confirm(t.confirmCancel)) e.preventDefault();
                  }}
                >
                  <input type="hidden" name="bookingId" value={b.id} />
                  <button type="submit" className={styles.cancelButton}>
                    {t.cancelButton}
                  </button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
