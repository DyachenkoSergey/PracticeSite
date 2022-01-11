import { socket } from "constants/socket";
import { ChatModelRoom } from "model/ChatModelRoom";
import { ModelBlock } from "model/ModelBlock";
import { FunctionComponent, useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { userIdSelector, userNameSelector } from "store/selectors/auth";

export const ModelRoom: FunctionComponent = () => {
  const [isMyRoom, setIsMyRoom] = useState(false);
  const params = useParams();
  const userId = useSelector(userIdSelector);
  const userName = useSelector(userNameSelector);

  window.addEventListener(
    "beforeunload",
    function (e) {
      socket.emit("ROOM:LEAVE", {
        roomId: params.id,
        userName: userName,
      });
    },
    false
  );

  window.onpopstate = () => {
    socket.emit("ROOM:LEAVE", {
      roomId: params.id,
      userName: userName,
    });
  };

  useEffect(() => {
    if (userId === params.id) {
      setIsMyRoom(true);
    } else {
      setIsMyRoom(false);
    }
    socket.emit("ROOM:JOIN", {
      roomId: params.id,
      userName: userName,
    });
  }, [params.id, userId, userName]);

  return (
    <>
      <Container fluid>
        <Row>
          <div className="col-12">
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
                {/* {isLoggedIn ? ( */}
                <Button
                  variant="secondary"
                  className="mt-3"
                  style={{ marginBottom: "80px" }}
                >
                  Private
                </Button>
                {/* ) : null} */}
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
