import { Meta, StoryObj } from "@storybook/react";
import { TicketKey, TicketKeyProps } from "./TicketKey";

const meta = {
  title: "Components/Ticket Key",
  component: TicketKey,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TicketKey>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultData: TicketKeyProps = {
  iconUrl:
    "https://jacksondr5.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10322?size=medium",
  id: "PE-5",
  link: "https://jacksondr5.atlassian.net/browse/PE-5",
};

export const Default: Story = {
  args: defaultData,
};
