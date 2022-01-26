import { IUser } from "interfaces/user";
import { FunctionComponent } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface IModelCardProps {
  model: IUser;
  isModelRoom?: Boolean;
}

export const ModelCard: FunctionComponent<IModelCardProps> = ({
  model,
  isModelRoom,
}) => {
  const navigate = useNavigate();

  const pushToModelRoom = async () => {
    navigate(`/modelRoom/${model.userId}`);
  };

  return isModelRoom ? (
    <>
      <div className="col-1 m-1">
        <Card className="shadow">
          <Button variant="light" onClick={pushToModelRoom} className="p-0">
            <div>
              <img
                alt="/"
                src="https://via.placeholder.com/150"
                className="img-fluid w-100 h-auto"
              ></img>
            </div>
          </Button>
        </Card>
      </div>
    </>
  ) : (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 p-1">
        <Card className="shadow">
          <Button variant="light" onClick={pushToModelRoom}>
              <div>
                <img
                  alt="/"
                  src="https://via.placeholder.com/150"
                  className="img-fluid w-100 h-auto"
                ></img>
              </div>
              <Card.Text>{model.userName}</Card.Text>
          </Button>
        </Card>
      </div>
    </>
  );
};
