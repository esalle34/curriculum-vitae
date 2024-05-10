import type { Meta, StoryObj } from "@storybook/react";

import CountrySelect from "./CountrySelect";
import { Countries } from "@/app/locales/constants";

const meta: Meta<typeof CountrySelect> = {
  component: CountrySelect,
};

export default meta;

type Story = StoryObj<typeof CountrySelect>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const CountrySelectFrance: Story = {
  render: () => (
    <CountrySelect country={Countries.France} setNewCountry={() => {}} />
  ),
};
