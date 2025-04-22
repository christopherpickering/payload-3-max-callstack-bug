export const defaultLocale = 'en' as const

export type Locale = (typeof locales)[number]

export const localesData = {
  en: {
    code: 'en',
    dir: 'ltr',
    label: 'English',
    abbreviation: 'EN',
    countryCode: 'US',
  },
  fr: {
    code: 'fr',
    label: 'Français',
    dir: 'ltr',
    abbreviation: 'FR',
    countryCode: 'FR',
  },
  yo: {
    code: 'yo',
    label: 'Yoruba',
    dir: 'ltr',
    abbreviation: 'YO',
    countryCode: 'NG',
  },
  ru: {
    code: 'ru',
    label: 'Русский',
    dir: 'ltr',
    abbreviation: 'RU',
    countryCode: 'RU',
  },
  ar: {
    code: 'ar',
    label: 'العربية',
    dir: 'rtl',
    abbreviation: 'AR',
    countryCode: 'AR',
  },
  ha: {
    code: 'ha',
    label: 'Hausa',
    dir: 'ltr',
    abbreviation: 'HA',
    countryCode: 'NG',
  },
  hi: {
    code: 'hi',
    label: 'हिन्दी',
    dir: 'ltr',
    abbreviation: 'HI',
    countryCode: 'IN',
  },
  ig: {
    code: 'ig',
    label: 'Igbo',
    dir: 'ltr',
    abbreviation: 'IG',
    countryCode: 'NG',
  },
  ml: {
    code: 'ml',
    label: 'മലയാളം',
    dir: 'ltr',
    abbreviation: 'ML',
    countryCode: 'IN',
  },
  si: {
    code: 'si',
    label: 'සිංහල',
    dir: 'ltr',
    abbreviation: 'SI',
    countryCode: 'LK',
  },
  tl: {
    code: 'tl',
    label: 'Tagalog',
    dir: 'ltr',
    abbreviation: 'TL',
    countryCode: 'PH',
  },
  ta: {
    code: 'ta',
    label: 'தமிழ்',
    dir: 'ltr',
    abbreviation: 'TA',
    countryCode: 'IN',
  },
  te: {
    code: 'te',
    label: 'తెలుగు',
    dir: 'ltr',
    abbreviation: 'TE',
    countryCode: 'IN',
  },
  es: {
    code: 'es',
    label: 'Español',
    dir: 'ltr',
    abbreviation: 'ES',
    countryCode: 'MX',
  },
}

export const locales = Object.entries(localesData).map(([k, _v]) => k)
