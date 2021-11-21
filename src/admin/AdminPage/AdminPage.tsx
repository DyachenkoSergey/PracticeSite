import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

export const AdminPage: FunctionComponent = () => {
  const allTabs = [
    { label: "All users", value: `/allUsers` },
    { label: "All models", value: `/allModels` },
    { label: "All studies", value: `/allStudies` },
  ];
  return (
    <>
      <h1>Admin Page component</h1>
      <ul>
        {allTabs.map((item) => (
          <li>
            <NavLink to={item.value}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
