import React from "react";
import Head from "./head";
import Search from "./search";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div>
        <Head />
        <Search />
          <Navbar />
    </div>
  );
};

export default Header;
