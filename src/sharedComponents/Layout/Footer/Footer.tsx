import { FunctionComponent } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Footer: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="secondary"
      variant="dark"
      className="p-1"
      fixed="bottom"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-footer" />
      <Navbar.Collapse
        id="responsive-navbar-footer"
        className="justify-content-center"
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
