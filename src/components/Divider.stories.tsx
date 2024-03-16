import { Meta, StoryObj } from "@storybook/react";
import { Divider, DividerProps } from "./Divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultData: DividerProps = {
  className: "h-20",
};

export const Default: Story = {
  args: defaultData,
};
