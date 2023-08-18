import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import AuthHandler from "./AuthHandler";

const Navbar = () => {
  return (
    <nav className="flex w-full px-24 py-4">
      <div className="flex items-center gap-16 flex-1">
        <Link href="/">
          <Image src="/Brief.png" alt="app-logo" width={100} height={50} />
        </Link>
        <Image src="/Separator.svg" alt="seperator" width={25} height={25} />
        <div className="relative flex items-center border-[1px] border-gray-300 w-[400px] rounded-2xl">
          <input
            placeholder="Search your news here..."
            className="bg-[#E2E2E3] p-4 outline-none"
          />
          <BsSearch className="absolute right-6" />
        </div>
      </div>

      <AuthHandler />
    </nav>
  );
};

export default Navbar;
