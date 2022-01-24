import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { userIdSelector } from "store/selectors/auth";
import { SignUp } from "users/pages/SignUp";

export const SignUpModel: FunctionComponent = () => {
  const userId = useSelector(userIdSelector);
  return (
    <div>
      <h3 className="d-none d-sm-block">Add new model</h3>
      <SignUp modelRole="MODEL" studioId={userId} />
    </div>
  );
};
