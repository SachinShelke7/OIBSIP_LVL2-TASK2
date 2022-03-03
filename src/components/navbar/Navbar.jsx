import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center space-x-5 bg-[#101010] py-4 px-2 md:px-5 max-h-[60px] group text-white sticky top-0">
      <div className="h-[60px] absolute top-0 left-0 w-2 z-[1] bg-orange-500" />
      <div className="h-[60px] absolute top-0 right-0 w-2 z-[1] bg-orange-500" />
      <p className="text-orange-500 text-2xl font-serif font-medium z-[2]">
        Shri Chatrapati Shivaji Raje
      </p>
      <div className="flex space-x-2 z-[1] font-medium">
        <p>Home</p>
        <p>About</p>
      </div>
    </div>
  );
};

export default Navbar;
