import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Button from "../Button";
import { Logo } from "../svg/svg";
import Link from "next/link";

export default function Navigation() {
  const logoRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    logoRef.current?.classList.add("fadeInAnimation");
  }, []);

  return (
    <nav className="justify-between px-2 pt-6 md:flex">
      <Link href={"#"}>
        <Logo className="h-[24] w-[104px] md:h-12 md:w-[212px]" />
      </Link>
      <Button className="hidden md:block">Pre-register</Button>
      {/* <Navbar /> */}
    </nav>
  );
}
