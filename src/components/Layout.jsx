import React from "react";
import { Navbar } from ".";

const Layout = ({ children, dark }) => {
  return (
    <div>
      <Navbar dark={dark} />
      {children}
    </div>
  );
};

export default Layout;
