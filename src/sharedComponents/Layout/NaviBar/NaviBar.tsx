import { FunctionComponent } from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  roleSelector,
  tokenSelector,
  userNameSelector,
  userTokensSelector,
} from "store/selectors/auth";
import { NavBarLink } from "./NavBarLink";
import { ProfileListDropdown } from "./ProfileListDropdown";
import { SignUpList } from "./SignUpList";

export const NaviBar: FunctionComponent = () => {
  const navigate = useNavigate();

  const userName = useSelector(userNameSelector);
  const userTokens = useSelector(userTokensSelector);
  const userRole = useSelector(roleSelector);
  const token = useSelector(tokenSelector);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="secondary"
        variant="dark"
        className="p-2 mb-4"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="mr-auto">
            <NavBarLink
              text="Web Cam Logo"
              onClick={() => {
                navigate("/");
              }}
            />
          </Nav>
          <Nav>
            {token ? (
              <>
                {userRole === "STUDIO" ? (
                  <>
                    <h5 className="mt-3 text-white pr-5">
                      "<strong>{userName}</strong>"
                    </h5>
                  </>
                ) : (
                  <h5 className="mt-3 text-white pr-5">
                    "<strong>{userName}</strong>", you have{" "}
                    <strong>{userTokens}</strong> tokens
                  </h5>
                )}
                <NavLink>
                  <ProfileListDropdown />
                </NavLink>
              </>
            ) : (
              <>
                <NavBarLink
                  text="Log In"
                  onClick={() => {
                    navigate("/logInPage");
                  }}
                />
                <SignUpList />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
