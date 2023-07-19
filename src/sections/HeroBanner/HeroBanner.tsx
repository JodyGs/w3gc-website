import Image from "next/image";
import React from "react";
import Announcements from "~/components/announcements/Announcements";
import Button from "~/components/Button";
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
    information: "Maison de la mutualité",
    details: "Paris, France",
    icon: France,
  },
];

export default function HeroBanner() {
  return (
    <>
      <div className="relative min-h-[216px] w-full">
        <Navigation />
        <Image
          src="/images/hero/w3gc-hero-bg.webp"
          alt="hero banner"
          fill
          className="absolute inset-0 -z-20 object-cover"
        />
        <Geometric className="animationStrobe absolute left-0 top-0 -z-10 sm:left-[-40px] sm:max-h-[200px] md:max-h-[300px]" />
        <div className="absolute right-0 top-0 -z-10 h-[333px] w-[228px]">
          <Image
            src={"/images/hero/person.webp"}
            placeholder="blur"
            blurDataURL={"/images/hero/person-placeholder.webp"}
            alt="Character"
            fill
            className="animationFromBottom"
          />
        </div>
      </div>
      <div className="mx-2 -mt-[90px] space-y-8 md:text-center">
        <h1>
          Web3
          <br />
          Gaming Con
        </h1>
        <h2>
          The first worldwide Web3 gaming conference at the heart of Paris
        </h2>
        <div className="space-y-2 sm:flex sm:justify-between sm:space-y-0 sm:px-11 lg:px-[88px]">
          {DATA_ANNOUNCEMENTS.map(
            ({ title, information, details, supplement, icon: Icon }) => (
              <Announcements
                key={title}
                title={title}
                information={information}
                details={details}
                supplement={supplement}
                icon={Icon}
              />
            )
          )}
        </div>
        <div className="mb-20 space-y-4 sm:flex sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button className="w-full sm:w-fit" variant="primary">
            Pre-register
          </Button>
          <Button className="w-full sm:w-fit" variant="secondary">
            Become a sponsor
          </Button>
        </div>
      </div>
    </>
  );
}
