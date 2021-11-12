import { FunctionComponent } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface IMockModels {
  id: string;
  name: string;
  age: string;
  role: string;
  video: string;
}

interface IModelCardProps {
  item: IMockModels;
}

export const ModelCard: FunctionComponent<IModelCardProps> = ({ item }) => {
  const navigate = useNavigate();
  const pushToModelRoom = () => {
    navigate(`/modelRoom/${item.id}`);
  };
  return (
    <div className="col-md-6 col-lg-4 p-1 col-sm-12">
      <Card>
        <Button variant="light" onClick={pushToModelRoom}>
          <Card.Body>
            <Card.Title>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </Card.Title>
            <Card.Text>{item.name}</Card.Text>
          </Card.Body>
        </Button>
      </Card>
    </div>
  );
};
