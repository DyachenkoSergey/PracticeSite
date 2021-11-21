import { FunctionComponent } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userIdSelector, userNameSelector } from "store/selectors/auth";
import { logOut } from "store/slices/auth";

export const NaviBar: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(userIdSelector);
  const userName = useSelector(userNameSelector);
  const navigate = useNavigate();

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
            <Nav.Link>
              <Button
                variant="outline-light"
                className="mr-1"
                onClick={() => {
                  navigate("/");
                }}
              >
                Web Cam Logo
              </Button>
            </Nav.Link>
            {isLogin ? (
              <Nav.Link>
                <Button
                  variant="outline-light"
                  className="mr-1"
                  onClick={() => {
                    navigate("/myProfile");
                  }}
                >
                  My profile
                </Button>
              </Nav.Link>
            ) : (
              ""
            )}

            <Nav.Link>
              <div className="input-group input-group-sm p-1">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Search model"
                />
              </div>
            </Nav.Link>
          </Nav>
          <Nav>
            {!isLogin ? (
              <>
                <Nav.Link>
                  <Button
                    variant="outline-light"
                    className="mr-1"
                    onClick={() => {
                      navigate("/logInPage");
                    }}
                  >
                    Log In
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button
                    variant="outline-light"
                    className="mr-1 color-white"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Register
                  </Button>
                </Nav.Link>
              </>
            ) : (
              <>
                <h5 className="mt-3 text-white pr-5">Hello "{userName}"</h5>
                <Nav.Link>
                  <Button
                    variant="outline-light"
                    className="mr-1"
                    onClick={sigOut}
                  >
                    Log Out
                  </Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
