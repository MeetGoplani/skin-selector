import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div >
      <div className="w-full flex justify-between items-center px-0 pt-6 bg-black z-10">
        <div className=" top-0 absolute left-0 w-16 md:w-32 ">
          <img
            src="/images/percentage.gif"
            alt="Left Animation"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-48 lg:h-48 lg:fixed left-0 top-0"
            style={{ zIndex: 9999 }}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center -space-y-5 sm:-space-y-5 sm:space-x-2 md:space-x-8">
          <Link to="/skins" className="no-underline">
            <p className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#e50046] font-['Pastor_of_Muppets'] pt-0 sm:pt-10">
              skins
            </p>
          </Link>
          <Link to="/">
            <img
              src="/images/logo2.png"
              className="w-32 h-32 sm:w-full sm:h-80 sm:-my-24 md:w-72 md:h-80"
              alt="Logo"
            />
          </Link>
          <a
            href="https://linktr.ee/miraricielador"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline mt-0 sm:mt-0 md:mt-6"
          >
            <p className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#e50046] font-['Pastor_of_Muppets'] pt-0 sm:pt-10">
              socials
            </p>
          </a>
        </div>

        <div className="w-16 md:w-32">
          <img
            src="/images/percentage.gif"
            alt="Right Animation"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-48 lg:h-48 lg:fixed right-0 top-0"
            style={{ zIndex: 9999 }}
          />
        </div>
      </div>
    </div>
  );
}
