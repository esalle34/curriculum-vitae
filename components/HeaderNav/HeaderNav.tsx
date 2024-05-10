"use client";
import { useRouter } from "next/navigation";
import CountrySelect from "../CountrySelect";
import LanguageSelect from "../LanguageSelect";
import Popin from "../Popin";
import { useState } from "react";
import { Countries, Languages } from "@/app/locales/constants";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

interface Props {
  country: Countries;
  language: Languages;
  dict: Record<string, string>;
}

const HeaderNav = ({ country, language, dict }: Props) => {
  const router = useRouter();
  const [displayed, setDisplayed] = useState(false);
  const [newCountry, setNewCountry] = useState(country);
  const [newLanguage, setNewLanguage] = useState(language);
  return (
    <nav className="flex">
      <div className="flex w-full justify-between items-center">
        <a href="https://www.linkedin.com/in/%F0%9F%92%BB-eric-salle-431664109/">
          <h1 className="pl-4 text-gray-100 font-bold text-2xl my-2 font-instagram">
            {dict.title}
          </h1>
        </a>
        <button
          className="mr-4 my-4 text-gray-100 font-semibold border-2 border-color-white p-2 rounded hover:bg-white hover:text-sky-800"
          onClick={() => setDisplayed(true)}
        >
          {language.toUpperCase()} - {getUnicodeFlagIcon(country)}
        </button>
      </div>
      <Popin
        displayed={displayed}
        setDisplayed={setDisplayed}
        title={dict.chooseLanguage}
        closeText={dict.close}
      >
        <CountrySelect country={country} setNewCountry={setNewCountry} />
        <LanguageSelect language={language} setNewLanguage={setNewLanguage} />
        <button
          className="self-end rounded-lg text-sky-800 border-sky-800 hover:bg-sky-800 hover:text-white border-2 p-2"
          onClick={() => {
            router.push(`${newLanguage}-${newCountry}`);
            setDisplayed(false);
          }}
        >
          {dict.submit}
        </button>
      </Popin>
    </nav>
  );
};

export default HeaderNav;
