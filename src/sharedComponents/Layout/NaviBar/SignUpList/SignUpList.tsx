import { FunctionComponent } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const SignUpList: FunctionComponent = () => {
  const navigate = useNavigate();

  const linksList = ["USER", "MODEL", "STUDIO"];

  return (
    <Dropdown className="ml-2">
      <Dropdown.Toggle
        variant="outline-light"
        className="color-white mt-2"
        style={{ marginRight: "30px" }}
      >
        Sign Up
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="dropdown-menu-end bg-secondary shadow"
        style={{ marginRight: "30px" }}
      >
        {linksList.map((item) => (
          <Dropdown.Item
            className="border-bottom"
            key={item}
            onClick={() => {
              navigate("/signUp", { state: { role: item } });
            }}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
