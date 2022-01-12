import { socket } from "constants/socket";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { messagesBlock } from "./MessagesBlock";

interface IChatProps {
  roomId?: string;
  userName: string;
}

interface IMessageList {
  roomId: string;
  userName: string;
  text: string;
}

export const ChatModelRoom: FunctionComponent<IChatProps> = ({
  roomId,
  userName,
}) => {
  const [usersList, setUsersList] = useState([]);
  const [messagesList, setMessagesList] = useState<IMessageList[] | null>(null);
  const [messageValue, setMessageValue] = useState("");
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on("ROOM:SET_USERS", (users: []) => {
      const usersInRoom = Object.values(users);
      setUsersList(usersInRoom);
    });
    socket.on("ROOM:SET_MESSAGES", (messages: any) => {
      setMessagesList(messages);
    });
  }, []);

  useEffect(() => {
    if (messagesRef && messagesRef.current) {
      messagesRef.current.scrollTo(0, 99999);
    }
  }, [messagesList]);

  const userBlock = usersList.map((item, index) => (
    <li
      className="list-group-item d-flex"
      key={index}
      style={{ height: "30px", overflow: "hidden", padding: "5px 0" }}
    >
      {item}
    </li>
  ));

  const sendMessage = () => {
    socket.emit("ROOM:NEW_MESSAGE", {
      roomId,
      userName,
      text: messageValue,
    });
    setMessageValue("");
  };

  return (
    <Container>
      <Row>
        <Card className="col-12 d-flex" style={{ height: "500px" }}>
          <Card.Body>
            <Row>
              <div
                className="col-md-4 bg-light"
                style={{ height: "465px", overflow: "auto" }}
              >
                <Card.Text>OnLine ({userBlock.length}):</Card.Text>
                <ul className="list-group list-group-flush list-unstyled text-left">
                  {userBlock}
                </ul>
              </div>

              <div
                className="col-md-8"
                style={{
                  textAlign: "left",
                  height: "450px",
                }}
              >
                <div
                  ref={messagesRef}
                  style={{
                    textAlign: "left",
                    overflow: "auto",
                    height: "320px",
                  }}
                >
                  <ul className="list-group list-unstyled">
                    {messagesBlock({ messagesList, userName })}
                  </ul>
                </div>
                <hr />
                <div>
                  <textarea
                    className="w-100 p-2 focus-none"
                    style={{ resize: "none" }}
                    placeholder="Message"
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                  ></textarea>
                  <Button
                    variant="primary"
                    onClick={sendMessage}
                    className="text-left"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
