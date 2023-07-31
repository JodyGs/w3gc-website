import React from "react";
import Link from "next/link";
import { GreyLogo } from "~/components/svg/svg";
import { NAVIGATION } from "~/utils/constants";

export default function Footer() {
  return (
    <div className="grid18 col-span-full px-2 py-20 md:px-0 lg:py-40">
      <div className="grid18 col-span-full space-y-16 md:space-y-0">
        <div className="col-span-11 space-y-8 md:col-start-2 md:col-end-12">
          <GreyLogo className="h-[40px] w-[177px]" />
          <p className="max-w-[304px] font-inter text-base text-custom-grey-lighter">
            Web3 Gaming Con is a conference related to video games in the web3
            industry, based in Paris.
          </p>
        </div>
        <div className="gap-x-4 space-y-14 md:col-span-5 md:col-start-13 md:col-end-18 md:grid md:grid-cols-5 md:space-y-0">
          <div className="col-span-2">
            <h3>Social</h3>
            <ul role="list" className="space-y-2">
              {NAVIGATION.social.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-full col-start-3 grid grid-cols-3 gap-x-4">
            <h3 className="col-span-full">Legal</h3>
            <ul role="list" className="col-span-full space-y-2">
              {NAVIGATION.legal.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h3 {
            color: #a6a7b2;
            text-transform: uppercase;
            font-weight: 800;
            margin-bottom: 32px;
          }

          li {
            color: white;
            font-size: 14px;
            font-weight: 700;
            line-height: 24px;
          }
        `}
      </style>
    </div>
  );
}
