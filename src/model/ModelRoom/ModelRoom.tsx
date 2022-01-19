import { socket } from "constants/socket";
import { getModel } from "model/api/models";
import { ChatModelRoom } from "model/ChatModelRoom";
import { ModelBlock } from "model/ModelBlock";
import { FunctionComponent, useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  roleSelector,
  userIdSelector,
  userNameSelector,
} from "store/selectors/auth";

export const ModelRoom: FunctionComponent = () => {
  const userId = useSelector(userIdSelector);
  const userName = useSelector(userNameSelector);
  const userRole = useSelector(roleSelector);

  const location = useLocation();
  const params = useParams();

  const [isMyRoom, setIsMyRoom] = useState(false);
  const [modelName, setModelName] = useState("");

  useEffect(() => {
    if (params.id) {
      getModel(params.id).then((model) => setModelName(model.userName));
      if (userId === params.id) {
        setIsMyRoom(true);
      } else {
        setIsMyRoom(false);
      }
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

  return (
    <>
      <Container fluid>
        <Row>
          <div className="col-12">
            <h4 className="text-secondary">
              Welcome to <strong className="m-2"> {modelName} </strong> room
            </h4>
            <Row>
              <div className="col-md-7 col-sm-12 pr-2">
                <ModelBlock />
                {isMyRoom ? (
                  <Button
                    variant="secondary"
                    className="mt-3"
                    style={{ marginBottom: "80px" }}
                  >
                    Go onLine
                  </Button>
                ) : null}
                {userRole === "USER" ? (
                  <Button
                    variant="secondary"
                    className="mt-3"
                    style={{ marginBottom: "80px" }}
                  >
                    Private
                  </Button>
                ) : null}
              </div>
              <div className="col-md-5 col-sm-12 pr-3">
                <ChatModelRoom roomId={params.id} userName={userName} />
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};
