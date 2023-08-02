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
    <section id="sponsors" className="grid18 relative col-span-full space-y-10">
      <div className="absolute h-full w-full">
        <Image
          src="/images/sponsors/bg-sponsors.webp"
          alt="Sponsors"
          fill
          className="absolute inset-0 -z-20 object-cover object-center opacity-60"
        />
      </div>
      <div className="md:col-span-16 md:grid16 relative col-span-full h-full w-full">
        <div className="grid16 col-span-full px-2 pb-10 pt-20 md:flex md:items-center md:justify-between">
          <SectionHeading
            title="Sponsors"
            className="col-span-full -mb-2 md:-mb-8"
          />
          <Button variant="secondary" className="col-span-full w-full md:w-fit">
            Become a sponsor
          </Button>
        </div>
        <div className="grid16 col-span-full lg:translate-y-16">
          <Marquee className="col-span-full overflow-hidden" loop={0}>
            {DATA_SPONSORS_1ST.map((sponsor) => (
              <div
                key={sponsor.name}
                className="-m-2 h-[128px] w-[128px] border-x-[1px] border-custom-grey-middle bg-black p-4 lg:h-[224px] lg:w-[224px]"
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
            {DATA_SPONSORS_1ST.map((sponsor) => (
              <div
                key={sponsor.name}
                className="-m-2 h-[128px] w-[128px] border-x-[1px] border-custom-grey-middle bg-black p-4 lg:h-[224px] lg:w-[224px]"
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
            className="col-span-full overflow-hidden border-t-[1px] border-custom-grey-middle"
          >
            {DATA_SPONSORS_2ND.map((sponsor) => (
              <div
                key={sponsor.name}
                className="-m-2 h-[128px] w-[128px] border-x-[1px] border-custom-grey-middle bg-black p-4 lg:h-[224px] lg:w-[224px]"
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
            {DATA_SPONSORS_2ND.map((sponsor) => (
              <div
                key={sponsor.name}
                className="-m-2 h-[128px] w-[128px] border-x-[1px] border-custom-grey-middle bg-black p-4 lg:h-[224px] lg:w-[224px]"
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
      </div>
    </section>
  );
}
