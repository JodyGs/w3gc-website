import React, { JSXElementConstructor } from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  img: string;
  placeholder: string;
  alt: string;
  number: JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
};

export default function Card({
  title,
  description,
  img,
  placeholder,
  alt,
  number: Number,
}: Props) {
  return (
    <div className="bg-custom-grey-dark">
      <div className="relative h-[200px] w-[304px]">
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
