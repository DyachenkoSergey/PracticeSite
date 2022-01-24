import { ModelProfile } from "model/components/ModelProfile";
import { EditModelInfo } from "model/components/ModelProfile/EditModelInfo";
import { ModelRoom } from "model/components/ModelRoom";
import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "sharedComponents/NotFoundPage";
import { TabPanel } from "studio/components/TabPanel";
import { LogInPage } from "users/pages/LogInPage";
import { MainPage } from "users/pages/MainPage";
import { SignUp } from "users/pages/SignUp";

export const GlobalRouting: FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/logInPage" element={<LogInPage />} />
        <Route path="/modelRoom/:id" element={<ModelRoom />} />
        <Route path="/modelProfile/:id" element={<ModelProfile />} />
        <Route path="/editModelInfo/:id" element={<EditModelInfo />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="studio/:id" element={<TabPanel />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
