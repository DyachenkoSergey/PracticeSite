import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { userIdSelector } from "store/selectors/auth";
import { SignUp } from "users/pages/SignUp";

export const SignUpModel: FunctionComponent = () => {
  const userId = useSelector(userIdSelector);
  return (
    <div>
      <SignUp modelRole="model" studioId={userId} />
    </div>
  );
};
