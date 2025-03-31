"use client";

import { GoNorthStar } from "react-icons/go";

import { CONTACT_INFORMATION } from "@/constants";
function ContactInfo() {
  return (
    <div className="flex gap-2 mt-1">
      {CONTACT_INFORMATION.map(item => (
        <div key={item.title} className="flex items-center gap-2">
          <div className="flex gap-2">
            <p className="font-bold">{item.title}: </p>
            <p>{item.content}</p>
          </div>
          <GoNorthStar className="text-xs" />
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;
