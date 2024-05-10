enum Languages {
  English = "en",
  Français = "fr",
  "Español" = "es",
}

enum Countries {
  France = "FR",
  USA = "US",
  "United Kingdom" = "GB",
  "España" = "ES",
  Luxembourg = "LU",
  Suisse = "CH",
  Belgique = "BE",
}

const languagesArray = Object.entries(Languages);
const countriesArray = Object.entries(Countries);

const locales = countriesArray.flatMap(([_countryKey, country]) =>
  languagesArray.map(
    ([_languageKey, language]): Locale => `${language}-${country}`
  )
);

export type Locale = `${Languages}-${Countries}`;
const defaultLocale: Locale = `${Languages.English}-${Countries.USA}`;

interface DecodeTranslationOptions {
  className?: string;
  htmlTag: string;
}

export interface DecodeTranslation {
  options: DecodeTranslationOptions;
  translation: string;
}

export {
  Languages,
  Countries,
  defaultLocale,
  languagesArray,
  countriesArray,
  locales,
};
