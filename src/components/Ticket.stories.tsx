import { Meta, StoryObj } from "@storybook/react";
import { Ticket, TicketProps } from "./Ticket";

const meta = {
  title: "Components/Ticket",
  component: Ticket,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Ticket>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTicket: TicketProps = {
  title: "New rewards program",
  description: `Creating a reward program for our customers will increase the adoption of our travel booking platform.

  This will benefit users by providing them with more advantages as they use the platform and will encourage new users to use the platform even more.
  
  We will know if this is true if the number of travel booked per user per year significantly increases after the first six months of experimentation.`,
  iconUrl:
    "https://jacksondr5.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10322?size=medium",
  id: "PE-5",
  link: "https://jacksondr5.atlassian.net/browse/PE-5",
};

export const Default: Story = {
  args: defaultTicket,
};

export const Collappsed: Story = {
  args: {
    ...defaultTicket,
    isCollapsed: true,
  },
};

export const ShowCollapseButtonOpen: Story = {
  args: {
    ...defaultTicket,
    showCollapseButton: true,
  },
};

export const ShowCollapseButtonClosed: Story = {
  args: {
    ...defaultTicket,
    showCollapseButton: true,
    isCollapsed: true,
  },
};

export const InlineTitle: Story = {
  args: {
    ...defaultTicket,
    inlineTitle: true,
    isCollapsed: true,
  },
};
