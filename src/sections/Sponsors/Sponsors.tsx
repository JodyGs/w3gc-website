import React from "react";
import Button from "~/components/Button";
import SectionHeading from "~/components/headings/SectionHeading";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const DATA_SPONSORS_1ST = [
  {
    name: "Starchain Gazer",
    logo: "/images/logosSponsors/StarchainGazer.webp",
    placeholder: "/images/logosSponsors/StarchainGazer-placeholder.png",
  },
  {
    name: "Atka",
    logo: "/images/logosSponsors/Atka.webp",
    placeholder: "/images/logosSponsors/Atka-placeholder.png",
  },
  {
    name: "Builder Capital",
    logo: "/images/logosSponsors/BuilderCapital.webp",
    placeholder: "/images/logosSponsors/BuilderCapital-placeholder.png",
  },
  {
    name: "Ubisoft",
    logo: "/images/logosSponsors/Ubisoft.webp",
    placeholder: "/images/logosSponsors/Ubisoft-placeholder.png",
  },
  {
    name: "Kima Ventures",
    logo: "/images/logosSponsors/KimaVentures.webp",
    placeholder: "/images/logosSponsors/KimaVentures-placeholder.png",
  },
];

const DATA_SPONSORS_2ND = [
  {
    name: "Homa Games",
    logo: "/images/logosSponsors/HomaGames.webp",
    placeholder: "/images/logosSponsors/HomaGames-placeholder.png",
  },
  {
    name: "Nft Factory",
    logo: "/images/logosSponsors/NftFactory.webp",
    placeholder: "/images/logosSponsors/NftFactory-placeholder.png",
  },
  {
    name: "Mine World",
    logo: "/images/logosSponsors/MineWorld.webp",
    placeholder: "/images/logosSponsors/MineWorld-placeholder.png",
  },
  {
    name: "Angel DAO",
    logo: "/images/logosSponsors/AngelDAO.webp",
    placeholder: "/images/logosSponsors/AngelDAO-placeholder.png",
  },
  {
    name: "Cherry",
    logo: "/images/logosSponsors/Cherry.webp",
    placeholder: "/images/logosSponsors/Cherry-placeholder.png",
  },
  {
    name: "Nxge",
    logo: "/images/logosSponsors/Nxge.webp",
    placeholder: "/images/logosSponsors/Nxge-placeholder.png",
  },
];

export default function Sponsors() {
  return (
    <section className="col-span-full space-y-10">
      <div className="relative h-full w-full">
        <div className="px-2 pb-10 pt-20">
          <SectionHeading title="Sponsors" />
          <Button variant="secondary" className="w-full">
            Become a sponsor
          </Button>
        </div>
        <Marquee>
          {DATA_SPONSORS_1ST.map((sponsor, index) => (
            <div
              key={sponsor.name}
              className="h-[128px] w-[128px] border-x-[1px] border-custom-grey-middle bg-black p-4"
            >
              <div className="relative h-full w-full">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee
          direction="right"
          className="border-t-[1px] border-custom-grey-middle"
        >
          {DATA_SPONSORS_2ND.map((sponsor, index) => (
            <div
              key={sponsor.name}
              className="h-[128px] w-[128px] border-x-[1px] border-custom-grey-middle bg-black p-4"
            >
              <div className="relative h-full w-full">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={sponsor.placeholder}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
