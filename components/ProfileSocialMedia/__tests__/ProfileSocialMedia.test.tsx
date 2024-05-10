import { render } from "@testing-library/react";
import ProfileSocialMedia from "../ProfileSocialMedia";
import * as dict from "@/app/locales/fr/cv.json";

describe("ProfileSocialMedia", () => {
  it("should match snapshot correctly", () => {
    const { container } = render(<ProfileSocialMedia contact={dict.contact} />);
    expect(container).toMatchSnapshot();
  });
});
