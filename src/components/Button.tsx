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
        "duration-600 max-w-full rounded-sm font-aktiv font-bold transition-all focus:outline-none md:text-xl",
        {
          "bg-custom-red-middle ring-[5px] ring-custom-red-middle/20 hover:border-transparent hover:bg-white hover:text-custom-red-middle hover:ring-transparent active:bg-custom-pink-light active:text-custom-red-darktext":
            variant === "primary",
          "border-[1px] border-white/50 hover:border-transparent hover:bg-white hover:text-custom-grey-dark active:bg-[#C5C6CE] active:text-[#3a3c4b]":
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
