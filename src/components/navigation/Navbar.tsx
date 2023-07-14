import React from "react";
import { Burger } from "../svg/svg";

export default function Navbar() {
  return (
    <div className="fixed bottom-4 right-4 z-10 rounded-lg bg-[#1d1e26]/60 p-2">
      <div className="rounded-sm bg-custom-grey-light p-3">
        <Burger className="h-5 w-5" />
      </div>
    </div>
  );
}
