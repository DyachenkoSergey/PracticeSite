import React, { FunctionComponent } from "react";
import { GlobalRouting } from "GlobalRouting";
import { Footer } from "./Footer";
import { NaviBar } from "./NaviBar";

export const Layout: FunctionComponent = () => {
  return (
    <>
      <NaviBar />
      <GlobalRouting />
      <Footer />
    </>
  );
};
