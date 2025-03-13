import React from 'react';
import { Link } from 'react-router-dom';
import  Frame  from './builder';

const HomePage = () => {
  return (
    <div className="bg-black text-green-400 w-full min-h-screen p-4 font-mono relative">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center px-0 pt-6 bg-black z-10">
        {/* Left Animation */}
        <div className="w-16 md:w-32">
          <img
            src="/images/percentage.gif"
            alt="Left Animation"
            className="w-16 h-16 md:w-48 md:h-48 fixed left-0 top-0"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-16">
          <Link to="/skins">
            <p className="text-6xl md:text-8xl font-bold text-[#e50046] font-['Pastor_of_Muppets'] pt-10">
              skins
            </p>
          </Link>

          <img
            src="/images/logo2.png"
            alt="Mirari Logo"
            className="w-full h-80 -my-24 md:w-48"
          />

          <Link to="/socials">
            <p className="text-6xl md:text-8xl font-bold text-[#e50046] font-['Pastor_of_Muppets'] pt-10">
              socials
            </p>
          </Link>
        </div>

        {/* Right Animation */}
        <div className="w-16 md:w-32">
          <img
            src="/images/percentage.gif"
            alt="Right Animation"
            className="w-16 h-16 md:w-48 md:h-48 fixed right-0 top-0"
          />
        </div>
      </div>

    {/* <SplashImage /> */}
    <Frame />
    </div>
  );
};

export default HomePage;