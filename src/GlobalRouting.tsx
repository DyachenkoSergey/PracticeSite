import { ModelProfile } from "model/ModelProfile";
import { ModelRoom } from "model/ModelRoom";
import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "sharedComponents/NotFoundPage";
import { TabPanel } from "studio/components/TabPanel/TabPanel";
import { LogInPage } from "users/pages/LogInPage";
import { MainPage } from "users/pages/MainPage";
import { SignUp } from "users/pages/SignUp";
import { UserProfile } from "users/pages/UserProfile";
// import { UserRoutes } from "users/routing";
// import { ModelRoutes } from "model/routing";
// import { AdminRoutes } from "admin/routes";
// import { StudioRoutes } from "studio/routing";

export const GlobalRouting: FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/logInPage" element={<LogInPage />} />
        <Route path="/modelRoom/:id" element={<ModelRoom />} />
        <Route path="/modelProfile/:id" element={<ModelProfile />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/myProfile" element={<UserProfile />} />
        <Route path="studio/:id" element={<TabPanel />} />
        {/* <StudioRoutes /> */}
        {/* <UserRoutes />
        <ModelRoutes />
        <AdminRoutes /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
