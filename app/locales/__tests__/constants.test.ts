import { Locale, defaultLocale, locales } from "../constants";

describe("constants", () => {
  it("should at least have fr-FR, en-US, en-GB, en-FR, es-ES in locales", () => {
    const supportedLanguages = ["fr-FR, en-US, en-GB, en-FR, es-ES"];
    expect(
      supportedLanguages.every((supportedLanguage) =>
        locales.indexOf(supportedLanguage as Locale)
      )
    ).toBeTruthy();
  });
  it("defaultLocale should be en-US", () => {
    expect(defaultLocale).toBe("en-US");
  });
});
