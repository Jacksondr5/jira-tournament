import Link from "next/link";
import Image from "next/image";
import { cl } from "@/cl";

export interface TicketKeyProps {
  className?: string;
  iconUrl: string;
  id: string;
  link: string;
}

export const TicketKey = ({ className, iconUrl, id, link }: TicketKeyProps) => (
  <span className={cl("flex gap-1", className)}>
    <Image src={iconUrl} alt="ticket type icon" height={20} width={20} />
    <Link href={link} className="font-normal text-gray-11 hover:underline">
      {id}
    </Link>
  </span>
);
