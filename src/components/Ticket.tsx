import { Chevron } from "@/icons";
import React from "react";
import { TicketKey, TicketKeyProps } from "./TicketKey";
import { cl } from "@/cl";

export interface TicketProps extends TicketKeyProps {
  className?: string;
  description: string;
  inlineTitle?: boolean;
  isCollapsed?: boolean;
  onCollapseButtonClick?: () => void;
  showCollapseButton?: boolean;
  title: string;
}

export const Ticket = ({
  className,
  description,
  inlineTitle,
  isCollapsed,
  onCollapseButtonClick,
  showCollapseButton,
  title,
  ...props
}: TicketProps) => {
  const titleComponent = <span className="text-xl font-bold">{title}</span>;
  return (
    <div
      className={cl(
        "bg-primary-3 py-6 px-6 rounded-lg text-gray-12",
        className
      )}
    >
      <div>
        <div className="flex gap-2 items-end">
          <TicketKey {...props} className={inlineTitle ? "mb-[1px]" : ""} />
          {inlineTitle && titleComponent}
        </div>
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
      {!inlineTitle && titleComponent}
      {!isCollapsed && (
        <>
          <hr className="my-2 bg-gray-12" />
          <p className="">{description}</p>
        </>
      )}
    </div>
  );
};
