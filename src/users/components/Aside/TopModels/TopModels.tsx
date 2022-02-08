import { SERVER_PATHS } from "constants/constants";
import { IUser } from "interfaces/user";
import { FunctionComponent } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ITopModelsProps {
  models: IUser[];
}

export const TopModels: FunctionComponent<ITopModelsProps> = ({ models }) => {
  return (
    <div
      className="rounded p-1 shadow bg-secondary"
      style={{ border: "2px solid #ccc" }}
    >
      <h4 className="mb-4 text-white">Top models</h4>
      <ListGroup as="ol" numbered variant="flush">
        {models.map((model) => (
          <ListGroup.Item
            as="li"
            style={{ textAlign: "left", border: "none" }}
            key={model.userId}
            // className="bg-transparent"
            className="bg-secondary text-white pt-0"
          >
            <Link
              to={`${SERVER_PATHS.modelRoom}/${model.userId}`}
              className="text-white text-decoration-none"
              key={model.userId}
            >
              {model.userName}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
