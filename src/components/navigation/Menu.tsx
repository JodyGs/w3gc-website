import React from "react";
import { LogoNav } from "../svg/svg";
import Link from "next/link";
import { NAVIGATION } from "~/utils/constants";

export default function Menu() {
  return (
    <div className="fixed bottom-12 z-50 hidden space-x-2 bg-[#1d1e26]/60 md:flex">
      <div className="flex items-center rounded-[4px] bg-custom-grey-light">
        <div className="flex h-full  items-center border-r-[1px] border-custom-grey-middle px-4 py-2">
          <LogoNav className="h-4 w-[37.6px]" />
        </div>
        <div>
          <ul className="flex space-x-2 p-2">
            {NAVIGATION.anchor.map((item, index) => (
              <li
                key={index}
                className="px-4 py-3 text-center font-inter text-sm leading-5"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="rounded-[4px] bg-custom-red-middle px-4 py-3 text-center font-bold text-white">
        Pre-register
      </button>
    </div>
  );
}
