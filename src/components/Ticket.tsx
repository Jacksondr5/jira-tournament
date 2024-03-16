import { Chevron } from "../icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface TicketProps {
  description: string;
  iconUrl: string;
  isCollapsed?: boolean;
  link: string;
  onCollapseButtonClick?: () => void;
  showCollapseButton?: boolean;
  ticketKey: string;
  title: string;
}

export const Ticket = ({
  description,
  iconUrl,
  isCollapsed,
  link,
  onCollapseButtonClick,
  showCollapseButton,
  ticketKey,
  title,
}: TicketProps) => (
  <div className="bg-cyan-900 py-4 px-6 rounded-lg">
    <div>
      <span className="flex gap-1">
        <Image src={iconUrl} alt="ticket type icon" height={20} width={20} />
        <Link href={link} className="font-normal text-gray-400 hover:underline">
          {ticketKey}
        </Link>
      </span>
      {showCollapseButton && (
        <button
          onClick={onCollapseButtonClick}
          className="float-right text-gray-400 hover:text-gray-100"
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
        <hr className="my-2" />
        <p className="text-gray-400">{description}</p>
      </>
    )}
  </div>
);
