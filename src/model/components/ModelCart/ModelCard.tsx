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
    <>
      <div className="p-1" style={{ width: "150px", height: "170px" }}>
        <Card className="shadow">
          <Button variant="light" onClick={pushToModelRoom} className="p-0">
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
