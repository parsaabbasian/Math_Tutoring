export const PHONE_COUNTRIES = [
  { id: 'ca', iso: 'CA', code: 'CA', dial: '+1', label: 'Canada' },
  { id: 'us', iso: 'US', code: 'US', dial: '+1', label: 'United States' },
  { id: 'uk', iso: 'GB', code: 'UK', dial: '+44', label: 'United Kingdom' },
  { id: 'au', iso: 'AU', code: 'AU', dial: '+61', label: 'Australia' },
  { id: 'ir', iso: 'IR', code: 'IR', dial: '+98', label: 'Iran' },
] as const;

export type PhoneCountryId = (typeof PHONE_COUNTRIES)[number]['id'];

export function isoToPhoneCountryId(iso: string): PhoneCountryId {
  const upper = iso.toUpperCase();
  if (upper === 'GB') return 'uk';
  const match = PHONE_COUNTRIES.find((c) => c.iso === upper);
  return match?.id ?? 'ca';
}

export function getPhoneCountry(id: string) {
  return PHONE_COUNTRIES.find((c) => c.id === id) ?? PHONE_COUNTRIES[0];
}

export function formatPhoneCountryLabel(country: (typeof PHONE_COUNTRIES)[number]) {
  return `${country.dial} ${country.code}`;
}

export function formatFullPhone(dial: string, local: string): string {
  const digits = local.replace(/\D/g, '');
  if (!digits) return '';
  return `${dial} ${local.trim()}`;
}

export function isValidLocalPhone(local: string): boolean {
  const digits = local.replace(/\D/g, '');
  return digits.length >= 7;
}

export function phonePlaceholder(countryId: string, language: 'en' | 'fa'): string {
  if (language === 'fa') {
    switch (countryId) {
      case 'ir': return '۰۹۱۲ ۰۰۰ ۰۰۰۰';
      case 'uk': return '۷۷۰۰ ۹۰۰۰۰۰';
      case 'au': return '۴۰۰ ۰۰۰ ۰۰۰';
      default: return '(۵۵۵) ۰۰۰-۰۰۰۰';
    }
  }
  switch (countryId) {
    case 'ir': return '0912 000 0000';
    case 'uk': return '7700 900000';
    case 'au': return '400 000 000';
    default: return '(555) 000-0000';
  }
}
