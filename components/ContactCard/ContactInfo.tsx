"use client";

import { GoNorthStar } from "react-icons/go";

import { CONTACT_INFORMATION } from "@/constants";
function ContactInfo({ items }: { items?: { title: string; content: string }[] }) {
  const list = items && items.length ? items : CONTACT_INFORMATION;

  return (
    <div className="flex items-center mt-1">
      {list.map(item => (
        <div key={item.title} className="flex items-center whitespace-nowrap">
          <p className="font-bold">{item.title}:&nbsp;</p>
          <p>{item.content}</p>
          <GoNorthStar className="text-xs mx-4 shrink-0 text-default-400" />
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;
