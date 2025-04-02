import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <div className="min-h-screen relative bg-black">

      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;