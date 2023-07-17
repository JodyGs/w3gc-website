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
      <div className="relative h-[216px] w-full">
        <Navigation />
        <Image
          src="/images/hero/w3gc-hero-bg.webp"
          alt="hero banner"
          fill
          className="absolute inset-0 -z-20"
        />
        <Geometric className="animationStrobe absolute left-0 top-0 -z-10" />
        <div className="absolute right-0 top-0 -z-10 h-[333px] w-[228px]">
          <Image
            src={"/images/hero/person.webp"}
            placeholder="blur"
            blurDataURL={"/images/hero/person-placeholder.webp"}
            alt="Character"
            fill
            className="animationFromBottom "
          />
        </div>
      </div>
      <div className="mx-2 -mt-[90px] space-y-8">
        <h1>Web3 Gaming Con</h1>
        <h2>
          The first worldwide Web3 gaming conference at the heart of Paris
        </h2>
        <div className="space-y-2">
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
        <div className="mb-20 space-y-4">
          <Button className="w-full" variant="primary">
            Pre-register
          </Button>
          <Button className="w-full" variant="secondary">
            Become a sponsor
          </Button>
        </div>
      </div>
    </>
  );
}
