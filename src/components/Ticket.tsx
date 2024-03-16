import { Chevron } from "../icons";
import Link from "next/link";
import React from "react";
import { TicketKey, TicketKeyProps } from "./TicketKey";
import { twMerge } from "tailwind-merge";

export interface TicketProps extends TicketKeyProps {
  className?: string;
  description: string;
  isCollapsed?: boolean;
  onCollapseButtonClick?: () => void;
  showCollapseButton?: boolean;
  title: string;
}

export const Ticket = ({
  className,
  description,
  isCollapsed,
  onCollapseButtonClick,
  showCollapseButton,
  title,
  ...props
}: TicketProps) => (
  <div
    className={twMerge(
      "bg-primary-3 py-6 px-6 rounded-lg text-gray-12",
      className
    )}
  >
    <div>
      <TicketKey {...props} />
      {showCollapseButton && (
        <button
          onClick={onCollapseButtonClick}
          className="float-right  hover:text-gray-10 text-gray-9"
        >
          {isCollapsed ? (
            <Chevron width={20} height={20} />
          ) : (
            <Chevron className="rotate-180" width={20} height={20} />
          )}
        </button>
      )}
    </div>
    <span className="text-xl font-bold">{title}</span>
    {!isCollapsed && (
      <>
        <hr className="my-2 bg-gray-12" />
        <p className="">{description}</p>
      </>
    )}
  </div>
);
