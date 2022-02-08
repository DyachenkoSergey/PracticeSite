import { ModelProfile } from "model/components/ModelProfile";
import { EditModelInfo } from "model/components/ModelProfile/EditModelInfo";
import { ModelRoom } from "model/components/ModelRoom";
import { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "sharedComponents/Layout";
import { NotFoundPage } from "sharedComponents/NotFoundPage";
import { TabPanel } from "studio/components/TabPanel";
import { LogInPage } from "users/pages/LogInPage";
import { MainPage } from "users/pages/MainPage";
import { MainPart } from "users/pages/MainPage/MainPart";
import { SignUp } from "users/pages/SignUp";

export const GlobalRouting: FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to={`find/${"all"}`} />} />
          <Route path="find" element={<MainPage />}>
            <Route path="all" element={<MainPart />} />
            <Route path="age/:age" element={<MainPart />} />
            <Route path="bodyType/:bodyType" element={<MainPart />} />
            <Route path="hair/:hair" element={<MainPart />} />
            <Route path="ethnicity/:ethnicity" element={<MainPart />} />
          </Route>
          <Route path="logInPage" element={<LogInPage />} />
          <Route path="modelRoom/:id" element={<ModelRoom />} />
          <Route path="modelProfile/:id" element={<ModelProfile />} />
          <Route path="editModelInfo/:id" element={<EditModelInfo />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="studio/:id" element={<TabPanel />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
