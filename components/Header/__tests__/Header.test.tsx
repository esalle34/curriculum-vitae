import { Countries, Languages } from "@/app/locales/constants";
import Header from "..";
import { render } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Header", () => {
  it("should render FR snapshot correctly", async () => {
    const Result = await Header({
      locale: `${Languages.Français}-${Countries.France}`,
    });
    const { container } = render(Result);
    expect(container).toMatchSnapshot();
  });
  it("should render EN snapshot correctly", async () => {
    const Result = await Header({
      locale: `${Languages.English}-${Countries.USA}`,
    });
    const { container } = render(Result);
    expect(container).toMatchSnapshot();
  });
});
