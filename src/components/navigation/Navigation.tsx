import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Button from "../Button";
import { Logo } from "../svg/svg";
import Link from "next/link";
import Menu from "./Menu";

export default function Navigation() {
  const logoRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    logoRef.current?.classList.add("fadeInAnimation");
  }, []);

  return (
    <nav className="md:col-span-16 grid16 z-50 justify-between px-2 pt-6 md:flex">
      <Link href={"#"}>
        <Logo className="h-[24] w-[104px] md:h-12 md:w-[212px]" />
      </Link>
      <Button className="hidden lg:block">Pre-register</Button>
      <MobileMenu />
      <Menu />
    </nav>
  );
}
