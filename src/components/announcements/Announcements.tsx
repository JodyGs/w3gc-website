import React, { JSXElementConstructor } from "react";

type Props = {
  title: string;
  information: string;
  details: string;
  supplement?: string;
  icon: JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
};

export default function Announcements({
  title,
  information,
  details,
  supplement,
  icon: Icon,
}: Props) {
  return (
    <div className="flex items-center space-x-4">
      <div className="min-w-[80px] rounded-sm bg-custom-red-middle p-2 pt-0">
        {/* <Icon className="mx-auto h-8 w-8" /> */}
        <Icon className="mx-auto h-8 w-8 md:h-10 md:w-10" />
        <p className="text-center text-xs font-extrabold uppercase leading-3 text-custom-grey-middle md:text-base">
          {title}
        </p>
      </div>
      <div className="text-left text-xs uppercase leading-3 md:text-base md:leading-none">
        {supplement && <p className="font-extrabold">{supplement}</p>}
        <p className="max-w-[140px] md:max-w-[200px]">{information}</p>
        <p className="font-extrabold text-custom-red-middle">{details}</p>
      </div>
    </div>
  );
}
