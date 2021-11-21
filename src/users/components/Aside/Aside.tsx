import { SERVER_PATHS } from "constants/constants";
import { IModel } from "interfaces/model";
import { FunctionComponent, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getTopModels } from "../../../model/api/models";

export const Aside: FunctionComponent = () => {
  const [models, setModels] = useState<IModel[]>([]);

  useEffect(() => {
    getTopModels().then((data) => setModels(data));
  });

  const renderModels = models.map((model) => (
    <ListGroup.Item as="li">
      <Link
        to={`${SERVER_PATHS.modelRoom}/${model.id}`}
        className="text-dark text-left"
      >
        {model.name}
      </Link>
    </ListGroup.Item>
  ));

  return (
    <div className="border border-secondary rounded p-5">
      <h3 className="mb-4">Top models</h3>
      <ListGroup as="ol" numbered variant="flush">
        {renderModels}
      </ListGroup>
    </div>
  );
};
