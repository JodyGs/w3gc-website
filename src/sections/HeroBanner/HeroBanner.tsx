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
      <Navigation />
      {/* <div className="relative">
        <Image
          src="/images/hero/w3gc-hero-bg.webp"
          alt="hero banner"
          fill
          className=""
        />
      </div> */}
      <Geometric className="animationStrobe absolute left-0 top-0 -z-10" />
      <Image
        src={"/images/hero/person.webp"}
        alt="Character"
        width={228.788}
        height={333.665}
        className="animationFromBottom absolute right-0 top-0 -z-10"
      />
      <div className="mx-2 mt-[70px] space-y-8">
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
