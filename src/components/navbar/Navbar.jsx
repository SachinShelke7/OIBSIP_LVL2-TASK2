// import Link from "next/link";
import React from "react";
import { Link } from "react-scroll";

const Navbar = ({ dark }) => {
  return (
    <div
      className={`flex justify-between items-center space-x-5 py-4 px-2 md:px-5 max-h-[60px] fixed top-0 w-full 2xl:container z-[999] shadow-md ease-in-out duration-700 ${
        dark ? "dark_nav shadow-[#202020]" : "light_nav shadow-gray-300"
      }`}
    >
      <p className="text-orange-500 text-2xl font-medium">
        Shri Chatrapati Shivaji Raje
      </p>

      <div className="flex space-x-5 px-5 font-medium">
        <Link
          activeClass="active"
          to="biography"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          delay={500}
          className="cursor-pointer font-medium select-none"
        >
          <div className="w-full flex justify-center items-center"></div>
          Biography
        </Link>
        <Link
          activeClass="active"
          to="events"
          spy={true}
          smooth={true}
          offset={-80}
          duration={1500}
          delay={500}
          className="cursor-pointer font-medium select-none"
        >
          <div className="w-full flex justify-center items-center"></div>
          Events
        </Link>
        <Link
          activeClass="active"
          to="administration"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          delay={500}
          className="cursor-pointer font-medium select-none"
        >
          <div className="w-full flex justify-center items-center"></div>
          Administration
        </Link>
        <Link
          activeClass="active"
          to="battles"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          delay={500}
          className="cursor-pointer font-medium select-none"
        >
          <div className="w-full flex justify-center items-center"></div>
          Battles
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
