import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { UserProfile } from "users/pages/UserProfile";

export const UserRoutes: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/myProfile" element={<UserProfile />} />
    </Routes>
  );
};
