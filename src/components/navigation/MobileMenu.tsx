import { Burger, Cross, RightArrow } from "../svg/svg";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "../Button";
import Link from "next/link";
import Mission from "../../sections/Mission/Mission";
import { NAVIGATION } from "~/utils/constants";

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button
        className="rounded-sm bg-custom-grey-light p-3 md:hidden"
        aria-label="Customise options"
      >
        <Burger className="h-5 w-5" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="" />
      <Dialog.Content className="fixed bottom-2 left-1/2 z-30 mx-auto h-[268px] w-[288px] -translate-x-1/2 space-y-2 rounded-lg bg-black p-2">
        <nav>
          <ul className="space-y-2 text-[#D4D6DC]">
            {NAVIGATION.anchor.map((item, index) => (
              <li
                key={index}
                className="px-4 py-3 text-center font-inter text-sm leading-5"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex w-full space-x-2">
          <Dialog.Close asChild>
            <button className="rounded-[4px] border-[1px] border-custom-grey-middle p-3">
              <RightArrow className="h-5 w-5 -rotate-90 fill-white" />
            </button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button className="flex-1 rounded-[4px] bg-custom-red-middle px-4 py-3 text-center font-bold text-white">
              Pre-register
            </button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button
              className="rounded-[4px] border-[1px] border-custom-grey-middle bg-white p-3"
              aria-label="Close"
            >
              <Cross className="h-5 w-5" />
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default function MobileMenu() {
  return (
    <div className="fixed bottom-4 right-4 z-10 rounded-lg bg-[#1d1e26]/60 p-2 md:hidden">
      <DialogDemo />
    </div>
  );
}
