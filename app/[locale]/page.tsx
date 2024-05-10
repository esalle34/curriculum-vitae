import { Pages } from "@/app/constants";
import { getDictionary, getLanguageAndCountry } from "@/app/locales/helpers";
import { Params } from "@/app/types";
import DescriptionBlock from "@/components/DescriptionBlock";
import ExperienceBlock from "@/components/ExperienceBlock";
import Profile from "@/components/Profile";
import { Metadata } from "next/types";

interface Props {
  params: Params;
}

export const generateMetadata = async ({
  params: { locale },
}: Props): Promise<Metadata> => {
  const { language } = getLanguageAndCountry(locale);
  const dict = await getDictionary(language, Pages.CV)[language]();
  return {
    title: dict.title,
    description: dict.description,
  };
};

const Page = async ({ params: { locale } }: Props) => {
  const { language } = getLanguageAndCountry(locale);
  const dict = await getDictionary(language, Pages.CV)[language]();

  return (
    <>
      <div className="flex p-4 md:flex-row flex-col-reverse justify-around">
        <div className="flex flex-col gap-12 pt-6 ">
          <DescriptionBlock
            description={dict.description}
            passionate={dict.passionate}
            qualities={dict.qualities}
            remote={dict.remote}
          />
          <ExperienceBlock
            title={dict.formation}
            introduction={dict.formationIntroduction}
            work={dict.formations}
          />
          <ExperienceBlock
            title={dict.altaprofitsTitle}
            introduction={dict.altaprofitsIntroduction}
            work={dict.altaprofitsWork}
          />
          <ExperienceBlock
            title={dict.wefightTitle}
            introduction={dict.wefightIntroduction}
            work={dict.wefightWork}
          />
          <ExperienceBlock
            title={dict["24sTitle"]}
            introduction={dict["24sIntroduction"]}
            work={dict["24sWork"]}
          />
        </div>
        <Profile
          profileSkills={{
            hardSkills: dict.hardSkills,
            languages: dict.languages,
            french: dict.french,
            english: dict.english,
            spanish: dict.spanish,
          }}
          profileSocialMedial={{
            contact: dict.contact,
          }}
        />
      </div>
    </>
  );
};

export default Page;
