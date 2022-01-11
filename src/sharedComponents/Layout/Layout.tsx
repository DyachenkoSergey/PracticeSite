import React, { FunctionComponent } from "react";
import { GlobalRouting } from "GlobalRouting";
import { Footer } from "./Footer";
import { NaviBar } from "./NaviBar";

export const Layout: FunctionComponent = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrLM25oEeGdDwVqwjKz-nieow9Nc93rVIMw&usqp=CAU)",
        height: "100vh",
      }}
    >
      <NaviBar />
      <GlobalRouting />
      <Footer />
    </div>
  );
};
