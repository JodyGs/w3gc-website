import React from "react";
import Card from "./Card";
import SectionHeading from "~/components/headings/SectionHeading";
import { NumberOne, NumberThree, NumberTwo } from "../../components/svg/svg";

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
    <section className="relative col-span-full pt-20">
      <div className="vertical-line"></div>
      <div className="px-2">
        <SectionHeading
          title={DATA_HEADING.title}
          subtitle={DATA_HEADING.subtitle}
          description={DATA_HEADING.description}
        />
        <div className="mt-12 space-y-4">
          {DATA_CARD.map(
            ({ title, description, img, placeholder, alt, number: Number }) => (
              <Card
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
        </div>
      </div>
    </section>
  );
}
