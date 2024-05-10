import { render } from "@testing-library/react";
import DescriptionBlock from "../DescriptionBlock";
import * as dict from "@/app/locales/fr/cv.json";

describe("DescriptionBlock", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <DescriptionBlock
        description={dict.description}
        qualities={dict.qualities}
        remote={dict.remote}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
