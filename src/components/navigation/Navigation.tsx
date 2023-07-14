import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Navigation() {
  const logoRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    logoRef.current?.classList.add("fadeInAnimation");
  }, []);

  return (
    <nav className="px-2 pt-6">
      <Image
        ref={logoRef}
        src="/w3gc-logo.webp"
        alt="W3GC Logo"
        width={104}
        height={24}
        className="appearingAnimation"
      />
      {/* <Navbar /> */}
    </nav>
  );
}
