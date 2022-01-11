import { FunctionComponent } from "react";
import { Button, Nav } from "react-bootstrap";

interface ILinkProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const NavBarLink: FunctionComponent<ILinkProps> = ({
  text,
  onClick,
}) => {
  return (
    <Nav.Link style={{ marginRight: "1rem" }}>
      <Button variant="outline-light" className="mr-1" onClick={onClick}>
        {text}
      </Button>
    </Nav.Link>
  );
};
