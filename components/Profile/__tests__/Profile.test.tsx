import { render } from "@testing-library/react";
import Profile from "../Profile";
import * as dict from "@/app/locales/fr/cv.json";

describe("Profile", () => {
  it("should match snapshot correctly", () => {
    const { container } = render(
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
    );
    expect(container).toMatchSnapshot();
  });
});
