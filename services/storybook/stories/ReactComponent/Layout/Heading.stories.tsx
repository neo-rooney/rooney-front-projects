import "@rooney/react-components-layout/style.css";
import type { Meta, StoryObj } from "@storybook/react";
import { Heading as _Heading } from "@rooney/react-components-layout";
import { classes, vars } from "@rooney/themes";

const meta: Meta<typeof _Heading> = {
  title: "React Components/Layout/Typography/Heading",
  component: _Heading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export default meta;
type Story = StoryObj<typeof _Heading>;

export const FirstStory: Story = {
  args: {
    as: "h1",
    children: "Hello World",
    fontSize: "4xl",
    color: "gray",
  },
};
