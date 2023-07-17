import React from "react";
import Button from "~/components/Button";
import SectionHeading from "~/components/headings/SectionHeading";

const DATA_HASHTAGS = [
  {
    name: "#Games",
    url: "https://twitter.com/hashtag/Games",
  },
  {
    name: "#Gamingtools",
    url: "https://twitter.com/hashtag/Gamingtools",
  },
  {
    name: "#DAO",
    url: "https://twitter.com/hashtag/DAO",
  },
  {
    name: "#NFT",
    url: "https://twitter.com/hashtag/NFT",
  },
  {
    name: "#Esporttools",
    url: "https://twitter.com/hashtag/Esporttools",
  },
];

const DATA_PICH_COMPETITION = [
  {
    name: "Pitch to Elite Gaming VCs",
    description:
      "A single pitch to reach a large number of strategic gaming VCs all at once!",
  },
  {
    name: "Fundraising booster",
    description: "Maximize your chance to close your open fundraising round!",
  },
  {
    name: "Connect with strategic builders",
    description: "Meet entrepreneur peers facing the same challenges!",
  },
  {
    name: "Earn Prize Pool",
    description: "Top 3 projects will split a $10,000 cash prize. Be the best!",
  },
];

function Hashtag() {
  return (
    <div className="flex flex-wrap items-center">
      {DATA_HASHTAGS.map((hashtag, index) => (
        <a
          key={index}
          href={hashtag.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 mr-2 rounded-sm bg-custom-red-middle/20 px-2 py-1 font-inter leading-6 text-custom-red-middle"
        >
          {hashtag.name}
        </a>
      ))}
    </div>
  );
}

export default function DemoDay() {
  return (
    <section className="col-span-full py-20">
      <div className="px-2">
        <SectionHeading
          title="Demo Day"
          subtitle="Participate in a Startup Pitch Competition"
        />
        <Hashtag />
        <div className="space-y-2 pt-8">
          {DATA_PICH_COMPETITION.map((pitch) => (
            <div
              key={pitch.name}
              className="space-y-2 bg-custom-grey-middle px-6 py-4 text-xs leading-4"
            >
              <h4 className="font-extrabold uppercase text-[#c5c6ce]">
                {pitch.name}
              </h4>
              <p className="font-inter text-custom-grey-lighter">
                {pitch.description}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-4 pt-8">
          <Button variant="primary" className="w-full">
            Apply to pitch
          </Button>
          <Button variant="secondary" className="w-full">
            Attend as a VC
          </Button>
        </div>
      </div>
    </section>
  );
}
