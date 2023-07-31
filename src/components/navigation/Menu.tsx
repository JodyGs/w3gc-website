import React from "react";
import { LogoNav, RightArrow } from "../svg/svg";
import Link from "next/link";
import { NAVIGATION } from "~/utils/constants";

export default function Menu() {
  return (
    <div className="fixed bottom-12 left-1/2 z-50 hidden -translate-x-1/2 space-x-2 rounded-[4px] bg-[#1d1e26]/60 p-2 md:flex">
      <div className="flex items-center rounded-[4px] bg-custom-grey-light">
        <div className="flex h-full  items-center border-r-[1px] border-[#3A3C4B] px-4 py-2">
          <LogoNav className="h-4 w-[37.6px]" />
        </div>
        <nav className="flex items-center">
          <div className="flex items-center justify-center pl-5 pr-3">
            <RightArrow className="h-4 w-4 -rotate-90 scale-110 fill-white" />
          </div>
          <ul className="flex space-x-2 p-2">
            {NAVIGATION.anchor.map((item, index) => (
              <li
                key={index}
                className="rounded-[2px] border-[1px] border-transparent px-4 py-3 text-center font-inter text-sm leading-5 text-[#D4D6DC] transition-all hover:border-[#686A7A] hover:text-white active:border-white active:bg-white active:text-[#2C2D38]"
              >
                <Link href={item.href} className="whitespace-nowrap">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <button className="whitespace-nowrap rounded-[4px] bg-custom-red-middle px-4 py-3 text-center font-inter font-bold text-white">
        Pre-register
      </button>
    </div>
  );
}
