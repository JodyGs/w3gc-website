import React from "react";
import Button from "~/components/Button";
import SectionHeading from "~/components/headings/SectionHeading";
import { Arrow } from "~/components/svg/svg";

const DATA_SPEAKERS = [
  {
    name: "Dan Biton",
    title: "CEO at Starchain Gazer",
    img: "/images/speakers/DanBiton.webp",
    placeholder: "/images/speakers/DanBiton-placeholder.webp",
  },
  {
    name: "Pierre Laurent",
    title: "Co-Founder at Atka",
    img: "/images/speakers/PierreLaurent.webp",
    placeholder: "/images/speakers/PierreLaurent-placeholder.webp",
  },
];

export default function Speakers() {
  return (
    <section className="col-span-full px-2 pb-20">
      <SectionHeading
        title="Speakers"
        description="Lorem ipsum dolor sit amet consectetur. Interdum nunc sem facilisis egestas mauris. Et amet vehicula nulla ullamcorper venenatis dictum velit. Sit adipiscing aliquam lectus volutpat suspendisse. Sit lacus diam egestas ut."
      />
      <div className="space-y-8 pt-8">
        <div className="space-x-4">
          {DATA_SPEAKERS.map(({ name, title, img, placeholder }) => (
            <div
              className="inline-block h-[280px] w-[144px] bg-custom-red-dark"
              key={name}
            ></div>
          ))}
        </div>
        <div className="space-x-4">
          <Button variant="secondary" size="small">
            <Arrow className="h-6 w-6" />
          </Button>
          <Button variant="secondary" size="small">
            <Arrow className="h-6 w-6 rotate-180" />
          </Button>
        </div>
        <Button variant="secondary" className="w-full">
          Become a speaker
        </Button>
      </div>
    </section>
  );
}
