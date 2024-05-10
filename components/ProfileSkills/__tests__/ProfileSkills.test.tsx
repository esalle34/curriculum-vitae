import { render } from "@testing-library/react";
import ProfileSkills from "../ProfileSkills";
import * as dict from "@/app/locales/fr/cv.json";

describe("ProfileSkills", () => {
  it("should match snapshot correctly", () => {
    const { container } = render(
      <ProfileSkills
        hardSkills={dict.hardSkills}
        languages={dict.languages}
        english={dict.english}
        french={dict.french}
        spanish={dict.spanish}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
