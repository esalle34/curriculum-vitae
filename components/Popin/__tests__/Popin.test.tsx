import { fireEvent, render } from "@testing-library/react";
import Popin from "..";
import * as dict from "@/app/locales/fr/common.json";

describe("Popin", () => {
  it("should match snapshot correctly", () => {
    const { container } = render(
      <Popin
        displayed
        setDisplayed={jest.fn()}
        title={dict.chooseLanguage}
        closeText={dict.close}
      >
        <></>
      </Popin>
    );
    expect(container).toMatchSnapshot();
  });
  it("should match snapshot correctly with display false", () => {
    const { container } = render(
      <Popin
        displayed={false}
        setDisplayed={jest.fn()}
        title={dict.chooseLanguage}
        closeText={dict.close}
      >
        <></>
      </Popin>
    );
    expect(container).toMatchSnapshot();
  });
  it("should close Popin on click on closeSVG", () => {
    const setDisplayed = jest.fn();
    const { getByRole } = render(
      <Popin
        displayed={true}
        setDisplayed={setDisplayed}
        title={dict.chooseLanguage}
        closeText={dict.close}
      >
        <></>
      </Popin>
    );
    const closeSvg = getByRole("img");
    fireEvent.click(closeSvg);
    expect(setDisplayed).toHaveBeenCalled();
  });
  it("should close Popin on click outside", () => {
    const setDisplayed = jest.fn();
    const { getByTestId } = render(
      <Popin
        displayed={true}
        setDisplayed={setDisplayed}
        title={dict.chooseLanguage}
        closeText={dict.close}
      >
        <></>
      </Popin>
    );
    const background = getByTestId("background");
    fireEvent.click(background);
    expect(setDisplayed).toHaveBeenCalled();
  });
});
