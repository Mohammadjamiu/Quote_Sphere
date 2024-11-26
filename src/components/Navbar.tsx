"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RainbowButtonDemo } from "./GithubStarButton";

const Logo = () => {
  return (
    <Link href="/" className="flex justify-center items-center p-0 ">
      <span className="font-semibold text-[18px] md:text-xl bg-primary text-center pl-[5.5px] md:pl-[6.5px] px-[4px] md:px-[5px] py-[2px] md:py-1 rounded text-light mr-2">
        Q.
      </span>
      <span className="  tracking-tight font-semibold text-lg md:text-xl ">
        QuoteSphere
      </span>
    </Link>
  );
};

const ToggleIcon = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set the initial theme state based on the current theme
  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="h-10 w-10 ml-2 rounded-lg p-2  bg-secondary"
    >
      {isDarkMode ? (
        <svg
          className="fill-primary block transition-transform duration-500 ease-in-out transform rotate-180 dark:rotate-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          className="fill-primary transition-transform duration-500 ease-in-out transform rotate-0 dark:rotate-180"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

const Navbar = () => {
  return (
    <header className="sticky w-screen top-0 left-0 right-0   z-50 mb-2 h-[65px] md:h-[75px] lg:h-[80px] bg-light dark:bg-background transition-colors duration-300">
      <div className="responsive-container relative w-full  max-w-full h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex">
            <Logo />
          </div>

          {/* Toggle and Hamburger for mobile and tablet */}
          <div className="flex items-center space-x-2  ml-auto mr-1">
            <RainbowButtonDemo />
            <ToggleIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
