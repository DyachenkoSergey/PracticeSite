import { FunctionComponent } from "react";
import { Route } from "react-router";
import { MainPage } from "users/pages/MainPage";

export const AdminRoutes: FunctionComponent = () => {
  return (
    <>
      <Route path="/" element={<MainPage />} />
    </>
  );
};
