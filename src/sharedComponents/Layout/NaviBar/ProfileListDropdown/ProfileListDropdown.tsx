import { FunctionComponent } from "react";
import { DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  roleSelector,
  tokenSelector,
  userIdSelector,
} from "store/selectors/auth";
import { logOut } from "store/slices/auth";
import { FaUserAlt } from "react-icons/fa";

export const ProfileListDropdown: FunctionComponent = () => {
  const token = useSelector(tokenSelector);
  const userRole = useSelector(roleSelector);
  const userId = useSelector(userIdSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logOut(userId));
    navigate("/");
  };

  return (
    <DropdownButton
      className="mb-0"
      as="ul"
      variant="secondary"
      title={<FaUserAlt />}
      id="input-group-dropdown-1"
      align="end"
    >
      {token && userRole === "USER" ? (
        <DropdownItem as="li" onClick={signOut}>
          Sign out
        </DropdownItem>
      ) : null}

      {token && userRole === "MODEL" ? (
        <>
          <DropdownItem
            as="li"
            onClick={() => {
              navigate(`/modelProfile/${userId}`);
            }}
          >
            My profile
          </DropdownItem>
          <DropdownItem
            as="li"
            onClick={() => {
              navigate(`/editModelInfo/${userId}`);
            }}
          >
            Edit profile
          </DropdownItem>
          <DropdownItem
            as="li"
            onClick={() => {
              navigate(`/modelRoom/${userId}`);
            }}
          >
            Start broadcast
          </DropdownItem>
          <DropdownItem as="li" onClick={signOut}>
            Sign out
          </DropdownItem>
        </>
      ) : null}
      {token && userRole === "STUDIO" ? (
        <>
          <DropdownItem
            as="li"
            onClick={() => {
              navigate(`/studio/${userId}`);
            }}
          >
            Studio control panel
          </DropdownItem>
          <DropdownItem as="li" onClick={signOut}>
            Sign out
          </DropdownItem>
        </>
      ) : null}
    </DropdownButton>
  );
};
