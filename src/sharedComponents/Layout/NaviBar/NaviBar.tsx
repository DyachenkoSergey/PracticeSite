import { FunctionComponent } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchModels } from "sharedComponents/SearchModels";
import {
  roleSelector,
  tokenSelector,
  userIdSelector,
  userNameSelector,
  userTokensSelector,
} from "store/selectors/auth";
import { logOut } from "store/slices/auth";
import { NavBarLink } from "./NavBarLink";
import { SignUpList } from "./SignUpList";

export const NaviBar: FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector(userNameSelector);
  const userTokens = useSelector(userTokensSelector);
  const userRole = useSelector(roleSelector);
  const userId = useSelector(userIdSelector);
  const token = useSelector(tokenSelector);

  const sigOut = () => {
    dispatch(logOut());
    navigate("/");
  };

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
            {token ? (
              <>
                <NavBarLink
                  text="My profile"
                  onClick={() => {
                    navigate("/myProfile");
                  }}
                />
                {userRole === "MODEL" ? (
                  <>
                    <NavBarLink
                      text="My room"
                      onClick={() => {
                        navigate(`/modelRoom/${userId}`);
                      }}
                    />
                  </>
                ) : null}
              </>
            ) : (
              ""
            )}
            <Nav.Link>
              <SearchModels />
            </Nav.Link>
          </Nav>
          <Nav>
            {!token ? (
              <>
                <NavBarLink
                  text="Log In"
                  onClick={() => {
                    navigate("/logInPage");
                  }}
                />
                <SignUpList />
              </>
            ) : (
              <>
                <h5 className="mt-3 text-white pr-5">
                  "<strong>{userName}</strong>", you have{" "}
                  <strong>{userTokens}</strong> tokens
                </h5>
                <NavBarLink text="Log Out" onClick={sigOut} />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
