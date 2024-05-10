import { Countries } from "@/app/locales/constants";
import CountrySelect from "..";
import { act, fireEvent, render } from "@testing-library/react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

describe("CountrySelect", () => {
  it("should render FR snapshot correctly", () => {
    const { container } = render(
      <CountrySelect country={Countries.France} setNewCountry={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render EN snapshot correctly", () => {
    const { container } = render(
      <CountrySelect country={Countries.USA} setNewCountry={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render and work as expected", () => {
    const setNewCountry = jest.fn();
    const { getByRole, getByText } = render(
      <CountrySelect country={Countries.France} setNewCountry={setNewCountry} />
    );
    const select = getByRole("combobox");
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: "USA" } });
    const optionUSA = getByText(`USA - ${getUnicodeFlagIcon(Countries.USA)}`);
    expect(optionUSA).toBeInTheDocument();
    expect(setNewCountry).toHaveBeenCalled();
  });
});
