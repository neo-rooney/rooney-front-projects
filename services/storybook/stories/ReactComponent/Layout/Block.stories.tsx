import "@rooney/react-components-layout/style.css";
import type { Meta, StoryObj } from "@storybook/react";
import { Block as _Block } from "@rooney/react-components-layout";

const meta: Meta<typeof _Block> = {
  title: "React Components/Layout/Block",
  component: _Block,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof _Block>;

export const FirstStory: Story = {
  args: {},
};
