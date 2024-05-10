import type { Meta, StoryObj } from "@storybook/react";

import LanguageSelect from "./LanguageSelect";
import { Languages } from "@/app/locales/constants";

const meta: Meta<typeof LanguageSelect> = {
  component: LanguageSelect,
};

export default meta;

type Story = StoryObj<typeof LanguageSelect>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const LanguageSelectFR: Story = {
  render: () => (
    <LanguageSelect language={Languages.Français} setNewLanguage={() => {}} />
  ),
};
