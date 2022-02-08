import { FunctionComponent } from "react";
import { LinkProps, NavLink } from "react-router-dom";

interface IFiltrationLinksProps {
  to: LinkProps["to"];
  onClick: () => void;
  label?: string | Element;
  numberElements?: string;
}

export const FiltrationLinks: FunctionComponent<IFiltrationLinksProps> = ({
  to,
  onClick,
  label,
  numberElements,
}) => {
  return (
    <NavLink
      to={to}
      className="d-flex justify-content-between text-white bg-transparent"
      onClick={onClick}
      style={({ isActive }) =>
        isActive
          ? {
              border: "2px solid #999",
              borderRadius: "5px",
              textDecoration: "none",
              paddingLeft: "10px",
              paddingRight: "10px",
            }
          : {
              textDecoration: "none",
              borderRadius: "5px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }
      }
    >
      <h6>{label}</h6>
      <h6>{numberElements}</h6>
    </NavLink>
  );
};
