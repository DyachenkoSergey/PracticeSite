import { AdminRoutes } from "admin/routes";
import { ModelProfile } from "model/ModelProfile";
import { ModelRoom } from "model/ModelRoom";
import { ModelRoutes } from "model/routing";
import { FunctionComponent } from "react";
import { Route, Routes } from "react-router";
import { LogInPage } from "users/pages/LogInPage";
import { MainPage } from "users/pages/MainPage";
import { Register } from "users/pages/Register";
import { UserProfile } from "users/pages/UserProfile";
import { UserRoutes } from "users/routing";

export const GlobalRouting: FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/logInPage" element={<LogInPage />} />
        <Route path="/modelRoom/:id" element={<ModelRoom />} />
        <Route path="/modelProfile/:id" element={<ModelProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myProfile" element={<UserProfile />} />
        <Route element={<UserRoutes />} />
        <Route element={<ModelRoutes />} />
        <Route element={<AdminRoutes />} />
      </Routes>
    </>
  );
};
