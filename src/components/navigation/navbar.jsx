import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import animationNavigation from "./animationNavigation";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const scrollTo = animationNavigation();

  return (
    <nav className="fixed mx-auto shadow-lg top-0 left-0 right-0 z-10 opacity-100">
      <div className="flex justify-between items-center bg-[#ACE1AF] py-2 px-3 sm:px-10 sm:py-5">
        <div className="flex justify-center items-center gap-3">
          <h1 className="font-bold text-[#d98a38] text-2xl">KKN 306 TUGUMUKTI</h1>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-center items-center gap-5">
            <Link href={"/"} className="hover:text-white focus:text-white">
              Home
            </Link>
            <a onClick={() => scrollTo("#teams")} className="cursor-pointer hover:text-white focus:text-white">
              Teams
            </a>
            <a onClick={() => scrollTo("#activity")} className="cursor-pointer hover:text-white focus:text-white">
              Activity
            </a>
            <a onClick={() => scrollTo("#location")} className="cursor-pointer hover:text-white focus:text-white">
              Location
            </a>
          </div>
        </div>
        <div className="sm:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)}>
              <IoMenu className="text-2xl cursor-pointer" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)}>
              <RxCross2 className="text-2xl cursor-pointer" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? (
        <div className="flex flex-col py-4 gap-3 items-center bg-[#ACE1AF]">
          <Link href={"/"} className="hover:text-white focus:text-white">
            Home
          </Link>
          <a onClick={() => scrollTo("#teams")} className="cursor-pointer hover:text-white focus:text-white">
            Teams
          </a>
          <a onClick={() => scrollTo("#activity")} className="cursor-pointer hover:text-white focus:text-white">
            Activity
          </a>
          <a onClick={() => scrollTo("#location")} className="cursor-pointer hover:text-white focus:text-white">
            Location
          </a>
        </div>
      ) : null}
    </nav>
  );
}
