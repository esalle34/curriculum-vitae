import { Pages } from "@/app/constants";
import { Countries, Languages } from "@/app/locales/constants";
import {
  decodeTranslation,
  getDictionary,
  getLanguageAndCountry,
} from "@/app/locales//helpers";
import * as translationsFR from "@/app/locales/fr/cv.json";
import * as translationsEN from "@/app/locales/en/cv.json";

describe("helpers", () => {
  describe("getDictionary", () => {
    it("should return correct title with FR translations", async () => {
      const dictionnary = await getDictionary(Languages.Français, Pages.CV)[
        Languages.Français
      ]();
      expect(dictionnary.title).toEqual(translationsFR.title);
    });
    it("should return correct title with EN translations", async () => {
      const dictionnary = await getDictionary(Languages.English, Pages.CV)[
        Languages.English
      ]();
      expect(dictionnary.title).toEqual(translationsEN.title);
    });
  });
  describe("getLanguageAndCountry", () => {
    it("sould return correct language and country", () => {
      expect(
        getLanguageAndCountry(`${Languages.Français}-${Countries.France}`)
      ).toEqual({ language: Languages.Français, country: Countries.France });
    });
  });
  describe("decodeTranslation", () => {
    it("should return correct decodedTranslation", () => {
      const translation = "<0>translation</0>";
      const options = {
        className: "className",
        htmlTag: "strong",
      };
      expect(
        decodeTranslation({
          options,
          translation,
        })
      ).toEqual(
        `<${options.htmlTag} class="${options.className}">translation</${options.htmlTag}>`
      );
    });
    it("should return correct decodedTranslation", () => {
      const translation = "<0>translation</0>";
      const options = {
        htmlTag: "strong",
      };
      expect(
        decodeTranslation({
          options,
          translation,
        })
      ).toEqual(`<${options.htmlTag} >translation</${options.htmlTag}>`);
    });
  });
});
