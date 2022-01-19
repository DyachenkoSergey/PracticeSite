import { IUser } from "interfaces/user";
import { FunctionComponent } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface IModelCardProps {
  model: IUser;
}

export const ModelCard: FunctionComponent<IModelCardProps> = ({ model }) => {
  const navigate = useNavigate();

  const pushToModelRoom = async () => {
    navigate(`/modelRoom/${model.userId}`);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-12 p-1">
      <Card className="shadow">
        <Button variant="light" onClick={pushToModelRoom}>
          <Card.Body>
            <Card.Title>
              <div>
                <img
                  alt="/"
                  src="https://via.placeholder.com/150"
                  className="img-fluid w-100 h-auto"
                ></img>
              </div>
            </Card.Title>
            <Card.Text>{model.userName}</Card.Text>
          </Card.Body>
        </Button>
      </Card>
    </div>
  );
};
