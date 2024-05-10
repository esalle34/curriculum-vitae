import { Languages } from "@/app/locales/constants";
import LanguageSelect from "..";
import { fireEvent, render } from "@testing-library/react";

describe("CountrySelect", () => {
  it("should render FR snapshot correctly", () => {
    const { container } = render(
      <LanguageSelect
        language={Languages.Français}
        setNewLanguage={jest.fn()}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render EN snapshot correctly", () => {
    const { container } = render(
      <LanguageSelect language={Languages.English} setNewLanguage={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render correctly with language select", () => {
    const setNewCountry = jest.fn();

    const { getByRole, getByText } = render(
      <LanguageSelect
        language={Languages.Français}
        setNewLanguage={setNewCountry}
      />
    );
    const select = getByRole("combobox");
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: "English" } });
    const optionUSA = getByText(`English`);
    expect(optionUSA).toBeInTheDocument();
    expect(setNewCountry).toHaveBeenCalled();
  });
});
