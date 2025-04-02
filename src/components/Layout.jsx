import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import PercentageScroll from "./Percentagescroll";

const Layout = () => {
  return (
    <div className="min-h-screen relative bg-black">
        <PercentageScroll/>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;