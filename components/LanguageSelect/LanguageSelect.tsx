import { Languages, languagesArray } from "@/app/locales/constants";
import { Dispatch, SetStateAction } from "react";

interface Props {
  language: Languages;
  setNewLanguage: Dispatch<SetStateAction<Languages>>;
}

const LanguageSelect = ({ language, setNewLanguage }: Props) => (
  <select
    className="my-2 p-2 border-2 border-slate-300 rounded"
    defaultValue={language}
    onChange={(e) => setNewLanguage(e.target.value as Languages)}
  >
    {languagesArray.map(([languageKey, languageValue]) => {
      return (
        <option key={languageValue} value={languageValue}>
          {languageKey}
        </option>
      );
    })}
  </select>
);

export default LanguageSelect;
