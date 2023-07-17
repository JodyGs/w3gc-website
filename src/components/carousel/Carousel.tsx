import React from "react";
import Button from "../Button";
import { LeftArrow, RightArrow } from "../svg/svg";

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
      <div className="relative overflow-hidden">
        <div
          className="flex space-x-2 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${curr * 50}%)` }}
        >
          {props.slides.map(({ name, title, img, placeholder }) => (
            <div
              className="min-h-[280px] min-w-[144px] bg-custom-red-dark"
              key={name}
            ></div>
          ))}
        </div>
      </div>
      <div className="space-x-4">
        <Button
          onClick={prev}
          variant="secondary"
          size="small"
          className="group"
        >
          <LeftArrow className="h-6 w-6 fill-white group-hover:fill-black" />
        </Button>
        <Button
          onClick={next}
          variant="secondary"
          size="small"
          className="group"
        >
          <RightArrow className="h-6 w-6 fill-white group-hover:fill-black" />
        </Button>
      </div>
    </>
  );
}

{
  /* {props.slides.map(({ name, title, img, placeholder }) => (
  <div
    className="min-h-[280px] min-w-[144px] bg-custom-red-dark"
    key={name}
  ></div>
))} */
}
