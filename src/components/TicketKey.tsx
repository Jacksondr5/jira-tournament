import Link from "next/link";
import Image from "next/image";

export interface TicketKeyProps {
  iconUrl: string;
  id: string;
  link: string;
}

export const TicketKey = ({ iconUrl, id, link }: TicketKeyProps) => (
  <span className="flex gap-1">
    <Image src={iconUrl} alt="ticket type icon" height={20} width={20} />
    <Link href={link} className="font-normal text-gray-11 hover:underline">
      {id}
    </Link>
  </span>
);
