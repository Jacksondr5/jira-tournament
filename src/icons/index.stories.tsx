import { Meta, StoryObj } from "@storybook/react";
import * as icons from "./index";

const meta = {
  title: "Icons",
  component: icons.Chevron,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof icons.Chevron>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  render: (args) => {
    const keys = Object.values(icons);
    return (
      <div className="flex gap-2">
        {Object.values(icons).map((icon) => icon({ key: icon.name }))}
      </div>
    );
  },
};
