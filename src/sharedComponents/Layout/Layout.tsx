import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { NaviBar } from "./NaviBar";

export const Layout: FunctionComponent = () => {
  return (
    <>
      <NaviBar />
      <Outlet />
      <Footer />
    </>
  );
};
