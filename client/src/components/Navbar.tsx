import { NAVBAR_HEIGHT } from "@/lib/constants";
import { Link } from "lucide-react";
import React from 'react';

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-600 text-white">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
          href="/"
          className="cursor-pointer hover:text-primary-300"
          scroll={false}>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Rental App Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-xl font-bold">
                Rental App
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;