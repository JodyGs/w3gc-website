import React from "react";
import Card from "./Card";
import SectionHeading from "~/components/headings/SectionHeading";
import { NumberOne, NumberThree, NumberTwo } from "../../components/svg/svg";
import Image from "next/image";
import clsx from "clsx";

const DATA_HEADING = {
  title: "Mission",
  subtitle: "Connect web3 gamers, builders and investors",
  description:
    "Our goal is to bring together talented gamers, visionary investors and innovative industry leaders to drive web3 gaming worldwide.",
};

const DATA_CARD = [
  {
    title: "Game Dev Announcements",
    description:
      "Be the first to see the latest games from the best web3 studios in the world",
    img: "/images/mission/cards/GameDevAnnouncements.webp",
    placeholder: "/images/mission/cards/GameDevAnnouncements-placeholder.webp",
    alt: "Game Dev Announcements",
    number: NumberOne,
  },
  {
    title: "Playtest sessions",
    description:
      "Try the most recent games in our interactive user sessions, give feedback and be part of the future of gaming",
    img: "/images/mission/cards/PlaytestSessions.webp",
    placeholder: "/images/mission/cards/PlaytestSessions-placeholder.webp",
    alt: "Playtest sessions",
    number: NumberTwo,
  },
  {
    title: "Gaming communities gathering",
    description:
      "Connect with gamers from around the world in a shared passion for web3 gaming",
    img: "/images/mission/cards/GamingCommunitiesGathering.webp",
    placeholder:
      "/images/mission/cards/GamingCommunitiesGathering-placeholder.webp",
    alt: "Gaming communities gathering",
    number: NumberThree,
  },
];

export default function Mission() {
  return (
    <section className="grid18 relative -z-20 col-span-full h-full w-full bg-custom-red-middle py-20">
      <Image
        alt="mission background"
        src="/images/mission/bg-mission.webp"
        fill
        className="absolute inset-0 -z-10 object-cover object-center"
      />
      <div className="vertical-line"></div>
      <div className="md:col-span-16 md:grid16 col-span-full px-2 md:px-0">
        <SectionHeading
          className="col-span-full xl:col-span-9"
          title={DATA_HEADING.title}
          subtitle={DATA_HEADING.subtitle}
          description={DATA_HEADING.description}
        />
        <div className="relative col-span-full mt-12 min-h-[600px] flex-wrap space-y-4 sm:flex sm:space-y-0 xl:mt-40">
          {DATA_CARD.map(
            (
              { title, description, img, placeholder, alt, number: Number },
              index
            ) => (
              <Card
                className={clsx(
                  index === 0 && "left-0 top-0",
                  index === 1 && "left-1/2 top-1/4 xl:-translate-x-1/2",
                  index === 2 && "right-0 top-0 xl:-translate-y-[54%]",
                  "sm:mb-2 xl:absolute"
                )}
                key={title}
                title={title}
                description={description}
                img={img}
                placeholder={placeholder}
                alt={alt}
                number={Number}
              />
            )
          )}
          <div className="bottom-[68%] left-[26.2%] -z-10 hidden h-[25.33%] w-[22.7%] scale-110 xl:absolute xl:block">
            <Image
              src="/images/mission/line12.webp"
              alt="line"
              fill
              className="h-full w-full"
            />
          </div>
          <div className="bottom-[25.2%] right-[13.3%] -z-10 hidden h-[44%] w-[24%] scale-110 xl:absolute xl:block">
            <Image
              src="/images/mission/line23.webp"
              alt="line"
              fill
              className=" h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
