import React, { JSXElementConstructor } from "react";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  img: string;
  placeholder: string;
  alt: string;
  number: JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

export default function Card({
  title,
  description,
  img,
  placeholder,
  alt,
  number: Number,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        className,
        "mx-auto max-h-[408px] max-w-[336px] bg-custom-grey-dark xl:h-[68%] xl:w-[26.9%]"
      )}
    >
      <div className="relative min-h-[200px] min-w-[304px]">
        <Image
          src={img}
          placeholder="blur"
          blurDataURL={placeholder}
          alt={alt}
          fill
          className="z-10 object-cover"
        />
      </div>
      <div className="relative space-y-6 p-8 pr-14">
        <h4 className="z-10 font-extrabold uppercase leading-6">{title}</h4>
        <p className="z-10 font-inter leading-6 text-custom-grey-lighter">
          {description}
        </p>
        {/* FIXME: Number next/image */}
        <Number className="absolute -top-7 right-0 max-h-[111px]" />
      </div>
    </div>
  );
}
