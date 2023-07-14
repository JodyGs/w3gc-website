import React from "react";
import Link from "next/link";
import { GreyLogo } from "~/components/svg/svg";
import { NAVIGATION } from "~/utils/constants";

export default function Footer() {
  return (
    <div className="footer px-2 py-20">
      <div className="space-y-16">
        <div className="space-y-8 ">
          <GreyLogo className="h-full max-h-[40px] w-full max-w-[177px]" />
          <p className="max-w-[304px] font-inter text-base text-custom-grey-lighter">
            Web3 Gaming Con is a conference related to video games in the web3
            industry, based in Paris.
          </p>
        </div>
        <div className="space-y-14">
          <div>
            <h3>Social</h3>
            <ul role="list" className="space-y-2">
              {NAVIGATION.social.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul role="list" className="space-y-2">
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
          .footer h3 {
            color: #a6a7b2;
            text-transform: uppercase;
            font-weight: 800;
            margin-bottom: 32px;
          }

          .footer li {
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
