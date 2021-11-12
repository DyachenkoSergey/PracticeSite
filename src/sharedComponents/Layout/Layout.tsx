import { ModelRoom } from "model/ModelRoom";
import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { LogInPage } from "users/pages/LogInPage";
import { Registration } from "users/pages/Registration";
import { MainPage } from "../../users/pages/MainPage";
import { UserProfile } from "../../users/pages/UserProfile";
import { Footer } from "./Footer";
import { NaviBar } from "./NaviBar";

export const Layout: FunctionComponent = () => {
  return (
    <>
      <NaviBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/logInPage" element={<LogInPage />} />
        <Route path="/modelRoom/:id" element={<ModelRoom />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
};
