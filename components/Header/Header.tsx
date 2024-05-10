import { Pages } from "@/app/constants";
import { Locale } from "@/app/locales/constants";
import { getLanguageAndCountry, getDictionary } from "@/app/locales/helpers";
import HeaderNav from "../HeaderNav";

interface Props {
  locale: Locale;
}

const Header = async ({ locale }: Props) => {
  const { language, country } = getLanguageAndCountry(locale);

  const dict = await getDictionary(language, Pages.COMMON)[language]();

  return (
    <header className="bg-blue-800">
      <HeaderNav language={language} country={country} dict={dict} />
    </header>
  );
};

export default Header;
