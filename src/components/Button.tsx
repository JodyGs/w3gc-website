import React from "react";
import clsx from "clsx";

type Props = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
};

export default function Button({
  className,
  variant = "primary",
  children = "Button",
  ...rest
}: Props) {
  return (
    <button
      className={clsx(
        className,
        "duration-600 rounded-sm px-6 py-4 font-aktiv font-bold transition-all focus:outline-none ",
        {
          "bg-custom-red-middle ring-[5px] ring-custom-red-middle/20 hover:border-transparent hover:bg-white hover:text-custom-red-middle hover:ring-transparent":
            variant === "primary",
          "border-[1px] border-white/50 hover:border-transparent hover:bg-white hover:text-custom-grey-dark":
            variant === "secondary",
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
