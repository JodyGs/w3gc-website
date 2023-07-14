import React from "react";
import SectionHeading from "~/components/headings/SectionHeading";

const DATA_HEADING = {
  title: "Mission",
  subtitle: "Connect web3 gamers, builders and investors",
  description:
    "Our goal is to bring together talented gamers, visionary investors and innovative industry leaders to drive web3 gaming worldwide.",
};

export default function Mission() {
  return (
    <section className="relative col-span-full pt-20">
      <div className="vertical-line"></div>
      <div className="px-2">
        <SectionHeading
          title={DATA_HEADING.title}
          subtitle={DATA_HEADING.subtitle}
          description={DATA_HEADING.description}
        />
      </div>
    </section>
  );
}
