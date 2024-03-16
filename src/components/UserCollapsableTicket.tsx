import React from "react";
import { Ticket, TicketProps } from "./Ticket";

export interface UserCollapsableTicketProps
  extends Omit<TicketProps, "showCollapseButton" | "onCollapseButtonClick"> {}

export const UserCollapsableTicket = (props: UserCollapsableTicketProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(props.isCollapsed);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Ticket
      {...props}
      isCollapsed={isCollapsed}
      onCollapseButtonClick={handleCollapse}
    />
  );
};
