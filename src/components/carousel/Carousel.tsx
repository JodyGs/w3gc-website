import React from "react";
import Button from "../Button";
import { LeftArrow, RightArrow } from "../svg/svg";
import Image from "next/image";

interface CarouselProps {
  slides: {
    name: string;
    title: string;
    img: string;
    placeholder: string;
  }[];
}

export default function Carousel(props: CarouselProps) {
  const [curr, setCurr] = React.useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? props.slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === props.slides.length - 1 ? 0 : curr + 1));

  return (
    <>
      <div className="grid4 relative col-span-full">
        <div
          className="col-span-full flex space-x-4 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${curr * 52}%)` }}
        >
          {props.slides.map(({ name, title, img, placeholder }) => (
            <div
              className="relative min-h-[280px] min-w-[144px] bg-custom-red-dark"
              key={name}
            >
              <Image src={img} alt={name} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-full space-x-4">
        <Button
          onClick={prev}
          variant="secondary"
          size="small"
          className="group"
        >
          <LeftArrow className="h-6 w-6 fill-white group-hover:fill-black group-active:fill-[#3A3C4B]" />
        </Button>
        <Button
          onClick={next}
          variant="secondary"
          size="small"
          className="group"
        >
          <RightArrow className="h-6 w-6 fill-white group-hover:fill-black group-active:fill-[#3A3C4B]" />
        </Button>
      </div>
    </>
  );
}
