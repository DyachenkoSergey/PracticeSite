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
    <div className="border border-secondary rounded p-5 shadow">
      <h3 className="mb-4">Top models</h3>
      <ListGroup as="ol" numbered variant="flush">
        {models.map((model) => (
          <ListGroup.Item
            as="li"
            style={{ textAlign: "left" }}
            key={model.userId}
            className="bg-transparent"
          >
            <Link
              to={`${SERVER_PATHS.modelRoom}/${model.userId}`}
              className="text-dark text-decoration-none"
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
