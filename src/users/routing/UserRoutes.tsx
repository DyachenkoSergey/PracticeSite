import { FunctionComponent } from "react";
import { Route } from "react-router";
import { UserProfile } from "users/pages/UserProfile";

export const UserRoutes: FunctionComponent = () => {
  return (
    <>
      <Route path="/myProfile" element={<UserProfile />} />
    </>
  );
};
