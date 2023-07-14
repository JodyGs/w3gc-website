import React from "react";
import Button from "~/components/Button";
import SectionHeading from "~/components/headings/SectionHeading";

import test from "./GameDevAnnouncements.webp";

export default function Sponsors() {
  return (
    <section className="col-span-full space-y-10">
      <div className="relative h-full w-full">
        <div className="px-2 pt-20">
          <SectionHeading title="Sponsors" />
          <Button variant="secondary" className="w-full">
            Become a sponsor
          </Button>
        </div>
        {/* TODO: Add sponsors (marquee) */}
      </div>
    </section>
  );
}
