import { socket } from "constants/socket";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { tokenSelector } from "store/selectors/auth";
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

  const token = useSelector(tokenSelector);

  useEffect(() => {
    let isMounted = true;
    socket.on("ROOM:SET_USERS", (users: []) => {
      const usersInRoom = Object.values(users);
      if (isMounted) {
        setUsersList(usersInRoom);
      }
    });
    socket.on("ROOM:SET_MESSAGES", (messages: any) => {
      if (isMounted) {
        setMessagesList(messages);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (messagesRef && messagesRef.current) {
      messagesRef.current.scrollTo(0, 99999);
    }
  }, [messagesList]);

  const userBlock = usersList.map((item, index) => (
    <li
      className="list-group-item d-flex bg-transparent"
      key={index}
      style={{ height: "30px", overflow: "hidden", padding: "5px 0" }}
    >
      {item}
    </li>
  ));

  const sendMessage = () => {
    if (!token) {
      toast("unregistered users cannot chat");
    } else {
      socket.emit("ROOM:NEW_MESSAGE", {
        roomId,
        userName,
        text: messageValue,
      });
      setMessageValue("");
    }
  };

  return (
    <Container>
      <Row>
        <Card className="col-12 d-flex" style={{ height: "500px" }}>
          <Card.Body>
            <Row>
              <div className="col-md-4 bg-light" style={{ overflow: "auto" }}>
                <Card.Text>OnLine ({userBlock.length}):</Card.Text>
                <ul className="list-group list-group-flush list-unstyled text-left">
                  {userBlock}
                </ul>
              </div>

              <div className="col-md-8 text-left">
                <div
                  ref={messagesRef}
                  style={{
                    textAlign: "left",
                    overflow: "auto",
                    height: "370px",
                  }}
                >
                  <ul className="list-group list-unstyled">
                    {messagesBlock({ messagesList, userName })}
                  </ul>
                </div>
              </div>
              <hr className="m-2" />
              <div className="col-md-12" style={{ height: "20%" }}>
                <h6 style={{ textAlign: "center" }}>
                  unregistered users cannot chat
                </h6>
                <div className="d-flex">
                  <textarea
                    className="w-100 p-1 focus-none"
                    style={{
                      resize: "none",
                      height: "38px",
                      marginRight: "5px",
                    }}
                    placeholder="Message"
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                  ></textarea>
                  <Button variant="primary" onClick={sendMessage}>
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
