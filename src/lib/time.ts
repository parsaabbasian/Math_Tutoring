const TORONTO_TZ = 'America/Toronto';

/**
 * Booking times are stored as Toronto wall-clock time encoded as UTC
 * (built with Date.UTC, rendered with timeZone: 'UTC'). This returns the
 * current Toronto wall-clock time in that same encoding, so comparisons
 * against Booking.start are timezone-safe regardless of server timezone.
 */
export function torontoNowAsUTC(): Date {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: TORONTO_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(new Date());
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  return new Date(
    Date.UTC(
      get('year'),
      get('month') - 1,
      get('day'),
      get('hour') % 24, // some engines report midnight as 24
      get('minute'),
      get('second'),
    ),
  );
}
