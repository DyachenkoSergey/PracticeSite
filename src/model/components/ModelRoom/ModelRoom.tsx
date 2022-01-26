import "./styles.css";
import { socket } from "constants/socket";
import { getModel, getModelsWithoutSearchParams } from "model/api/models";
import { ChatModelRoom } from "model/components/ChatModelRoom";
import { ModelBlock } from "../ModelBlock";
import { FunctionComponent, useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { userIdSelector, userNameSelector } from "store/selectors/auth";
import { IUser } from "interfaces/user";
import { ModelCard } from "../ModelCart";

export const ModelRoom: FunctionComponent = () => {
  const userId = useSelector(userIdSelector);
  const userName = useSelector(userNameSelector);

  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const [modelName, setModelName] = useState("");
  const [models, setModels] = useState<IUser[]>([]);

  useEffect(() => {
    getModelsWithoutSearchParams().then((model) => setModels(model));
    if (params.id) {
      getModel(params.id).then((model) => {
        setModelName(model.userName);
      });
    }
    socket.emit("ROOM:JOIN", {
      roomId: params.id,
      userName: userName,
    });
    return () => {
      socket.emit("ROOM:LEAVE", {
        roomId: params.id,
        userName: userName,
      });
    };
  }, [params.id, userId, userName, location.search]);

  const pushToModelProfile = () => {
    navigate(`/modelProfile/${params.id}`);
  };

  const renderModel = models.map((model: IUser) => (
    <ModelCard model={model} key={model.userId} isModelRoom={true} />
  ));

  return (
    <>
      <Container fluid>
        <div className="d-flex">
          <Button
            onClick={pushToModelProfile}
            variant="secondary"
            className="mb-2"
            style={{ marginRight: "200px" }}
          >
            Profile
          </Button>
          <h4 className="text-secondary">
            Welcome to <strong className="m-2"> {modelName} </strong> room
          </h4>
        </div>
        <Row>
          <div
            className="d-md-flex d-block breakpoints"
            style={{ height: "500px" }}
          >
            <div className="col-12 col-md-7 pr-2 d-flex d-md-flex d-block">
              <ModelBlock />
            </div>
            <div className="col-12 col-md-5 pr-3 d-flex d-md-flex d-block">
              <ChatModelRoom roomId={params.id} userName={userName} />
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-12 d-flex flex-wrap">
            {models ? renderModel : null}
          </div>
        </Row>
      </Container>
    </>
  );
};
