import React from "react";
import Announcements from "../announcements/Announcements";

interface DataProps {
  data: {
    title: string;
    information: string;
    details?: string;
    supplement?: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}

export default function HeroMin(props: DataProps) {
  return (
    <div className="col-span-full space-y-8 xl:hidden">
      <div>
        <h1 className="mb-8">
          Web3
          <br />
          Gaming Con
        </h1>
        <h2>
          The first worldwide Web3 gaming conference at the heart of Paris
        </h2>
      </div>
      <div className="space-y-2 xs:flex xs:justify-between xs:space-y-0 sm:px-11 lg:px-[88px]">
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
    </div>
  );
}
