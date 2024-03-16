import { Meta, StoryObj } from "@storybook/react";
import { RoundRobinGroup, RoundRobinGroupProps } from "./RoundRobinGroup";
import { Default as DefaultTicket } from "./Ticket.stories";

const meta = {
  title: "Components/Round Robin Group",
  component: RoundRobinGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RoundRobinGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultData: RoundRobinGroupProps = {
  groupNumber: 1,
  tickets: [
    DefaultTicket.args,
    DefaultTicket.args,
    DefaultTicket.args,
    DefaultTicket.args,
  ],
};

export const Default: Story = {
  args: defaultData,
};
