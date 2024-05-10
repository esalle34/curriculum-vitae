import { render } from "@testing-library/react";
import ProfileImage from "../ProfileImage";

describe("ProfileImage", () => {
  it("should match snapshot correctly", () => {
    const { container } = render(<ProfileImage />);
    expect(container).toMatchSnapshot();
  });
});
