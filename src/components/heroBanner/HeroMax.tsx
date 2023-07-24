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

export default function HeroMax(props: DataProps) {
  return (
    <div className="col-span-16 grid16 relative hidden space-y-10 pb-10 xl:block">
      <div className="absolute top-10 flex w-full justify-between">
        <Announcements {...props.data[0]} />
        <Announcements {...props.data[1]} />
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
