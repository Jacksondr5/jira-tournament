import React from "react";
import clsx from "clsx";
import { Ticket, TicketProps } from "./Ticket";

export interface RoundRobinGroupProps {
  groupNumber: number;
  tickets: TicketProps[];
}

export const RoundRobinGroup = ({
  groupNumber,
  tickets,
}: RoundRobinGroupProps) => {
  return (
    <div className="bg-primary-2 p-2 pt-4 rounded-lg">
      <h3 className="pb-2 text-gray-12 font-bold text-2xl flex justify-center">
        Group {groupNumber}
      </h3>
      {tickets.map((x, index) => (
        <>
          <Ticket
            {...x}
            key={x.id}
            isCollapsed
            className={clsx(
              "rounded-none",
              index % 2 === 0 ? "bg-primary-4" : "bg-primary-5"
            )}
          />
          {index !== tickets.length - 1 && (
            <hr className="py-0.5 bg-gray-6 border-t-0" />
          )}
        </>
      ))}
    </div>
  );
};
