import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";
import { Languages, Countries } from "@/app/locales/constants";

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const HeaderFR: Story = {
  render: () => <Header locale={`${Languages.Français}-${Countries.France}`} />,
};
