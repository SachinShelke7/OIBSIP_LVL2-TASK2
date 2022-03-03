import Image from "next/image";
import React from "react";
import { banner1 } from "../..";

const Header = () => {
  return (
    <div>
      <Image src={banner1} alt="banner1" />
      <div className="w-full 2xl:container h-52 bg-gradient-to-b from-[#101010] absolute top-[60px] z-10" />
    </div>
  );
};

export default Header;
