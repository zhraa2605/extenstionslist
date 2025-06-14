import React from "react";
import logo from "../assets/images/logo.svg";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="dark:bg-neutral-800 bg-neutral-50 p-5">
      <div className="flex flex-wrap justify-between items-center">
        <img src={logo} alt="logo" className="fill-white mb-4 sm:mb-0" />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
