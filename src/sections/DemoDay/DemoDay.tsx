import Image from "next/image";
import React from "react";
import Button from "~/components/Button";
import HorizontalSlider from "~/components/carousel/HorizontalSlider";
import SectionHeading from "~/components/headings/SectionHeading";
import { Booster, Connect, PrizePool, Pitch } from "~/components/svg/svg";

import bgBooster from "./bg-booster.webp";
import bgConnect from "./bg-connect.webp";
import bgPitch from "./bg-pitch.webp";
import bgPrizePool from "./bg-prizepool.webp";

const DATA_PITCH_COMPETITION = [
  {
    name: "Pitch to Elite Gaming VCs",
    description:
      "A single pitch to reach a large number of strategic gaming VCs all at once!",
    svg: Pitch,
    background: bgPitch,
  },
  {
    name: "Fundraising booster",
    description: "Maximize your chance to close your open fundraising round!",
    svg: Booster,
    background: bgBooster,
  },
  {
    name: "Connect with strategic builders",
    description: "Meet entrepreneur peers facing the same challenges!",
    svg: Connect,
    background: bgConnect,
  },
  {
    name: "Earn Prize Pool",
    description: "Top 3 projects will split a $10,000 cash prize. Be the best!",
    svg: PrizePool,
    background: bgPrizePool,
  },
];

export default function DemoDay() {
  const [currentbg, setCurrentbg] = React.useState(0);

  return (
    <section
      id="demoday"
      className="md:grid18 relative col-span-full py-20 lg:pb-[200px] lg:pt-60"
    >
      <Image
        alt="background"
        src={DATA_PITCH_COMPETITION[currentbg]?.background.src as string}
        fill
        className="absolute inset-0 -z-[1] object-cover opacity-70 duration-700"
      />
      <div className=" absolute inset-0 z-[-1] bg-[#1D1E26]/60 object-cover"></div>
      <div className="md:grid18 px-2 md:col-span-full md:px-0">
        <SectionHeading className="grid16 col-span-16" title="Demo Day" />
        <div className="cols-pan-full grid18 space-y-8 pt-8 md:space-y-0 lg:pt-20">
          <HorizontalSlider
            slides={DATA_PITCH_COMPETITION}
            modifyBackground={setCurrentbg}
          />
        </div>
      </div>

      <div className="space-y-4 px-2 pt-8 sm:flex sm:items-center sm:justify-center sm:space-x-2 sm:space-y-0 md:hidden">
        <Button variant="primary" className="w-full">
          Apply to pitch
        </Button>
        <Button variant="secondary" className="w-full">
          Attend as a VC
        </Button>
      </div>
    </section>
  );
}
