import React from "react";
import Announcements from "../announcements/Announcements";

interface DataProps {
  data: {
    title: string;
    information: string;
    informationBis?: string;
    details: string;
    supplement?: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}

export default function HeroMax(props: DataProps) {
  return (
    <div className="relative col-span-full hidden space-y-10 pb-10 pt-[240px] xl:block">
      <div className="absolute top-[330px] flex w-full justify-between">
        {props.data.map(
          ({
            title,
            information,
            informationBis,
            details,
            supplement,
            icon: Icon,
          }) => (
            <Announcements
              key={title}
              title={title}
              information={information}
              informationBis={informationBis}
              details={details}
              supplement={supplement}
              icon={Icon}
            />
          )
        )}
      </div>
      <h1>
        web3
        <br />
        gaming con
      </h1>
      <h2 className="">
        The first worldwide Web3 gaming conference at the heart of Paris
      </h2>
    </div>
  );
}
