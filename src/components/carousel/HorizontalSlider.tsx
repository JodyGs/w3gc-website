import React from "react";
import Button from "../Button";
import { Booster, Connect, PrizePool, Pitch } from "../svg/svg";
import Hashtag from "../DemoDay/Hashtags";
import { StaticImageData } from "next/image";
import clsx from "clsx";

interface Data {
  slides: {
    name: string;
    description: string;
    svg: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
    background: StaticImageData;
  }[];
  modifyBackground?: (index: number) => void;
}

export default function HorizontalSlider(props: Data) {
  const [curr, setCurr] = React.useState(0);

  const changeStates = (index: number) => {
    setCurr(index);
    props.modifyBackground && props.modifyBackground(index);
  };

  return (
    <>
      <div className="col-span-full md:col-span-6 md:col-start-2 md:col-end-9 md:block">
        <h4 className="mb-4 font-inter text-2xl font-extrabold leading-8 lg:text-[40px] lg:leading-[48px]">
          Participate in a Startup Pitch Competition
        </h4>
        <Hashtag />
        <div className="relative hidden h-32 w-32 overflow-hidden xl:inline-block xl:pt-11">
          <div
            className="absolute inset-0  transition-transform duration-500 ease-out"
            style={{ transform: `translateY(-${curr * 128}px)` }}
          >
            <Pitch
              className={clsx(
                curr == 0 ? "text-white" : "text-custom-red-middle",
                "h-32 w-32"
              )}
            />
            <Booster
              className={clsx(
                curr == 1 ? "text-white" : "text-custom-red-middle",
                "h-32 w-32"
              )}
            />
            <Connect
              className={clsx(
                curr == 2 ? "text-white" : "text-custom-red-middle",
                "h-32 w-32"
              )}
            />
            <PrizePool
              className={clsx(
                curr == 3 ? "text-white" : "text-custom-red-middle",
                "h-32 w-32"
              )}
            />
          </div>
        </div>
        <div className="lg:pt-26 hidden space-y-4 pt-8 md:block xl:flex xl:space-x-2 xl:space-y-0 xl:pt-28">
          <Button variant="primary" className="w-full xl:w-fit">
            Apply to pitch
          </Button>
          <Button variant="secondary" className="w-full xl:w-fit">
            Attend as a VC
          </Button>
        </div>
      </div>
      <div className="relative col-span-full space-y-2 md:col-span-8 md:col-start-10">
        {props.slides.map((pitch, index) => (
          <div
            onMouseEnter={() => changeStates(index)}
            key={pitch.name}
            className="group space-y-2 bg-custom-grey-middle px-6 py-4 text-xs leading-4 transition-all duration-300 ease-in-out hover:bg-white hover:py-8 md:space-y-4 lg:px-10 lg:py-6"
          >
            <h4 className="font-extrabold uppercase text-[#c5c6ce] transition-colors duration-300 ease-in-out group-hover:text-black xl:text-base xl:leading-6">
              {pitch.name}
            </h4>
            <p className="font-inter text-custom-grey-lighter transition-colors duration-300 ease-in-out group-hover:text-black xl:text-base xl:leading-6">
              {pitch.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
