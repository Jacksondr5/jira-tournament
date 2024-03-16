import React from "react";
import clsx from "clsx";
import { Ticket, TicketProps } from "./Ticket";
import { cl } from "@/cl";

export interface RoundRobinGroupProps {
  className?: string;
  groupNumber: number;
  tickets: TicketProps[];
}

export const RoundRobinGroup = ({
  className,
  groupNumber,
  tickets,
}: RoundRobinGroupProps) => {
  return (
    <div className={cl("bg-primary-2 p-2 pt-4 rounded-lg", className)}>
      <h3 className="pb-2 text-gray-12 font-bold text-2xl flex justify-center">
        Group {groupNumber}
      </h3>
      {tickets.map((x, index) => (
        <>
          <Ticket
            {...x}
            key={x.id}
            inlineTitle
            isCollapsed
            className={clsx(
              "rounded-none py-2",
              index % 2 === 0 ? "bg-primary-4" : "bg-primary-5"
            )}
          />
          {index !== tickets.length - 1 && (
            <hr className="py-[1px] bg-gray-6 border-t-0" />
          )}
        </>
      ))}
    </div>
  );
};
