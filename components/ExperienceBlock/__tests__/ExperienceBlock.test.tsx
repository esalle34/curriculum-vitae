import { render } from "@testing-library/react";
import ExperienceBlock from "../ExperienceBlock";
import * as dict from "@/app/locales/fr/cv.json";
import * as dictEN from "@/app/locales/en/cv.json";
import * as dictES from "@/app/locales/es/cv.json";

describe("ExperienceBlock", () => {
  it("should match Altaprofits translations snapshot", () => {
    const { container } = render(
      <ExperienceBlock
        title={dict.altaprofitsTitle}
        introduction={dict.altaprofitsIntroduction}
        work={dict.altaprofitsWork}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match Wefight translations snapshot", () => {
    const { container } = render(
      <ExperienceBlock
        title={dict.wefightTitle}
        introduction={dict.wefightIntroduction}
        work={dict.wefightWork}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match 24s translations snapshot", () => {
    const { container } = render(
      <ExperienceBlock
        title={dict["24sTitle"]}
        introduction={dict["24sIntroduction"]}
        work={dict["24sWork"]}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match Altaprofits EN translations snapshot", () => {
    const { container } = render(
      <ExperienceBlock
        title={dictEN.altaprofitsTitle}
        introduction={dictEN.altaprofitsIntroduction}
        work={dictEN.altaprofitsWork}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match Wefight EN translations snapshot", () => {
    const { container } = render(
      <ExperienceBlock
        title={dictEN.wefightTitle}
        introduction={dictEN.wefightIntroduction}
        work={dictEN.wefightWork}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match 24s EN translations snapshot", () => {
    const { container } = render(
      <ExperienceBlock
        title={dictEN["24sTitle"]}
        introduction={dictEN["24sIntroduction"]}
        work={dictEN["24sWork"]}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match Altaprofits ES translations snapshot", () => {
    const { container } = render(
      <ExperienceBlock
        title={dictES.altaprofitsTitle}
        introduction={dictES.altaprofitsIntroduction}
        work={dictES.altaprofitsWork}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match Wefight ES translations snapshot", () => {
    const { container } = render(
      <ExperienceBlock
        title={dictES.wefightTitle}
        introduction={dictES.wefightIntroduction}
        work={dictES.wefightWork}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match 24s ES translations snapshot", () => {
    const { container } = render(
      <ExperienceBlock
        title={dictES["24sTitle"]}
        introduction={dictES["24sIntroduction"]}
        work={dictES["24sWork"]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
