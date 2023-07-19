import React from "react";
import Button from "~/components/Button";
import Carousel from "~/components/carousel/Carousel";
import SectionHeading from "~/components/headings/SectionHeading";
import { LeftArrow, RightArrow } from "~/components/svg/svg";

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
  {
    name: "William Piquard",
    title: "Co-Founder at Atka",
    img: "/images/speakers/WilliamPiquard.webp",
    placeholder: "/images/speakers/WilliamPiquard-placeholder.webp",
  },
];

export default function Speakers() {
  return (
    <section className="md:col-span-16 grid16 col-span-full px-2 pb-20">
      <SectionHeading
        className="col-span-full"
        title="Speakers"
        description="Lorem ipsum dolor sit amet consectetur. Interdum nunc sem facilisis egestas mauris. Et amet vehicula nulla ullamcorper venenatis dictum velit. Sit adipiscing aliquam lectus volutpat suspendisse. Sit lacus diam egestas ut."
      />
      <div className="col-span-full space-y-8 pt-8">
        <Carousel slides={DATA_SPEAKERS} />
        <Button variant="secondary" className="w-full">
          Become a speaker
        </Button>
      </div>
    </section>
  );
}
