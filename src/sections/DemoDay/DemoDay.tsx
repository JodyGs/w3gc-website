import Image from "next/image";
import React from "react";
import Button from "~/components/Button";
import Hashtag from "~/components/DemoDay/Hashtags";
import SectionHeading from "~/components/headings/SectionHeading";
import { Spitch } from "~/components/svg/svg";

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

export default function DemoDay() {
  return (
    <section className="md:grid18 relative col-span-full py-20 lg:pb-[200px] lg:pt-60">
      <Image
        alt="background"
        src="/images/DemoDay/bg-DemoDay.webp"
        fill
        className="absolute inset-0 -z-[1] hidden object-cover sm:block"
      />
      <Image
        alt="background"
        src="/images/DemoDay/bg-mobile-DemoDay.webp"
        fill
        className="absolute inset-0 -z-[1] object-cover sm:hidden"
      />
      <div className="md:grid18 px-2 md:col-span-full md:px-0">
        <SectionHeading className="grid16 col-span-16" title="Demo Day" />
        <div className="cols-pan-full grid18 space-y-8 pt-8 md:space-y-0 lg:pt-20">
          <div className="col-span-full md:col-span-6 md:col-start-2 md:col-end-9 md:block">
            <h4 className="mb-4 font-inter text-2xl font-extrabold leading-8 lg:text-[40px] lg:leading-[48px]">
              Participate in a Startup Pitch Competition
            </h4>
            <Hashtag />
            <div className="hidden xl:inline-block xl:pt-11">
              <Spitch className="h-32 w-32" />
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
            {DATA_PICH_COMPETITION.map((pitch) => (
              <div
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
