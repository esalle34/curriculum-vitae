import { Countries, Languages } from "@/app/locales/constants";
import * as dict from "@/app/locales/fr/common.json";
import HeaderNav from "..";
import { fireEvent, render } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => null,
    };
  },
}));

describe("HeaderNav", () => {
  it("should match FR - France snapshot", () => {
    const { container } = render(
      <HeaderNav
        country={Countries.France}
        language={Languages.Français}
        dict={dict}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match EN - USA snapshot", () => {
    const { container } = render(
      <HeaderNav
        country={Countries.USA}
        language={Languages.English}
        dict={dict}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match ES - Spain snapshot", () => {
    const { container } = render(
      <HeaderNav
        country={Countries.España}
        language={Languages.Español}
        dict={dict}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should open and close Popin", () => {
    const { queryAllByRole, getByTestId } = render(
      <HeaderNav
        country={Countries.España}
        language={Languages.Español}
        dict={dict}
      />
    );
    const buttons = queryAllByRole("button");
    expect(getByTestId("popin")).toHaveClass("hidden");
    fireEvent.click(buttons[0]);
    expect(getByTestId("popin")).not.toHaveClass("hidden");
    fireEvent.click(buttons[1]);
    expect(getByTestId("popin")).toHaveClass("hidden");
  });
});
