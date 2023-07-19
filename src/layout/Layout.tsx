import React, { ReactNode } from "react";

import Head from "next/head";
import clsx from "clsx";
import HeroBanner from "~/sections/HeroBanner/HeroBanner";
import Footer from "~/sections/Footer/Footer";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>W3GC - Web3 Gaming Con</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div
      className={clsx(
        {
          "debug-screens": process.env.NODE_ENV === "development",
        },
        "relative overflow-hidden"
      )}
    >
      <div className="main-container m-auto max-w-8xl">
        <header className="col-span-full mx-auto mb-20 md:col-start-2 md:col-end-18">
          <HeroBanner />
        </header>
        <main className="grid4 md:grid18 col-span-full">{children}</main>
        <footer className="md:grid18 col-span-full md:col-start-1 md:col-end-19 lg:col-start-2 lg:col-end-18">
          <Footer />
        </footer>
      </div>
    </div>
  </>
);

export default Layout;
