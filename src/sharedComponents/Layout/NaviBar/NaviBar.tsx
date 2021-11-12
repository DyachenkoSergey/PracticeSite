import { FunctionComponent } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const NaviBar: FunctionComponent = () => {
  const navigate = useNavigate();
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
            <Nav.Link>
              <Button
                variant="outline-light"
                className="mr-1"
                onClick={() => {
                  navigate("/userProfile");
                }}
              >
                My profile
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button
                variant="outline-light"
                className="mr-1"
                onClick={() => {
                  navigate("/allModels");
                }}
              >
                All Models
              </Button>
            </Nav.Link>
          </Nav>
          <Nav>
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
                className="mr-1"
                onClick={() => {
                  navigate("/");
                }}
              >
                Log Out
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button
                variant="outline-light"
                className="mr-1 color-white"
                onClick={() => {
                  navigate("/registration");
                }}
              >
                Registration
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
