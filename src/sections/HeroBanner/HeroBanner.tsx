import Image from "next/image";
import React from "react";
import Button from "~/components/Button";
import HeroMax from "~/components/heroBanner/HeroMax";
import HeroMin from "~/components/heroBanner/HeroMin";
import Navigation from "~/components/navigation/Navigation";
import { Calendar, France, Geometric } from "~/components/svg/svg";

const DATA_ANNOUNCEMENTS = [
  {
    title: "When?",
    information: "Friday & Saturday",
    details: "To be announced!",
    supplement: "2 days",
    icon: Calendar,
  },
  {
    title: "Where?",
    information: "Maison de ",
    informationBis: "la mutualité",
    details: "Paris, France",
    icon: France,
  },
];

export default function HeroBanner() {
  return (
    <>
      <div className="grid18 relative col-span-full w-full pb-20 md:mb-10 lg:mb-0 lg:pb-[200px]">
        <Navigation />
        <div className="absolute top-0 -z-10 min-h-[216px] w-full md:h-full lg:h-2/3">
          <Image
            src="/images/hero/w3gc-hero-bg.webp"
            alt="hero banner"
            fill
            className="absolute inset-0 -z-20 object-cover"
          />
        </div>
        <Geometric className="animationStrobe absolute -left-36 -top-10 -z-10 h-[160px] md:-left-48 md:h-2/3 lg:-top-48 lg:w-10/12 xl:-top-56" />
        <div className="absolute right-0 top-0 -z-10 h-[333px] w-[228px] md:right-1/2 md:h-[86%] md:w-[41.875%] md:translate-x-1/2 md:translate-y-5 lg:translate-y-0">
          <Image
            src={"/images/hero/person.png"}
            placeholder="blur"
            blurDataURL={"/images/hero/person-placeholder.webp"}
            alt="Character"
            fill
            className="animationFromBottom object-contain lg:mx-auto"
          />
        </div>
        <div className="md:grid16 md:col-span-16 col-span-full mx-2 space-y-8 pt-[72px] md:mx-0 md:text-center">
          <HeroMax data={DATA_ANNOUNCEMENTS} />
          <HeroMin data={DATA_ANNOUNCEMENTS} />
          <div className="col-span-full mb-20 space-y-4 sm:flex sm:justify-center sm:space-x-4 sm:space-y-0 xl:mb-52">
            <Button className="w-full sm:w-fit" variant="primary">
              Pre-register
            </Button>
            <Button className="w-full sm:w-fit" variant="secondary">
              Become a sponsor
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
