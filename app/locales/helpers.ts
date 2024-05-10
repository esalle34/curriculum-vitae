import { Countries, DecodeTranslation, Languages, Locale } from "./constants";

const getDictionary = (language: Languages, page: string) => ({
  [language]: () =>
    import(`@/app/locales/${language}/${page}.json`).then(
      (module) => module.default
    ),
});

const getLanguageAndCountry = (locale: Locale) => {
  const [language, country] = locale.split("-");

  return { language: language as Languages, country: country as Countries };
};

const decodeTranslation = ({
  options: { htmlTag, className },
  translation,
}: DecodeTranslation) => {
  return translation
    .replace(`<0>`, `<${htmlTag} ${className ? `class="${className}"` : ""}>`)
    .replace(`</0>`, `</${htmlTag}>`);
};

export { getDictionary, getLanguageAndCountry, decodeTranslation };
