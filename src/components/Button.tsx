import React from "react";
import clsx from "clsx";

type Props = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
  size?: "small" | "default";
};

export default function Button({
  className,
  variant = "primary",
  children = "Button",
  size = "default",
  ...rest
}: Props) {
  return (
    <button
      className={clsx(
        className,
        "duration-600 rounded-sm font-aktiv font-bold transition-all focus:outline-none ",
        {
          "bg-custom-red-middle ring-[5px] ring-custom-red-middle/20 hover:border-transparent hover:bg-white hover:text-custom-red-middle hover:ring-transparent":
            variant === "primary",
          "border-[1px] border-white/50 hover:border-transparent hover:bg-white hover:text-custom-grey-dark":
            variant === "secondary",
        },
        {
          "p-4": size === "small",
          "px-6 py-4": size === "default",
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
