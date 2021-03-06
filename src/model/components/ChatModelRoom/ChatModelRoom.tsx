import { socket } from "constants/socket";
import { IChatProps, IMessageList } from "interfaces/model";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { tokenSelector } from "store/selectors/auth";
import { messagesBlock } from "./MessagesBlock";

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
    <div
      className="w-100"
      style={{ paddingRight: "15px", paddingLeft: "20px" }}
    >
      <Row style={{ height: "100%" }}>
        <Card className="col-12 d-flex pt-3" style={{ height: "100%" }}>
          <div className="d-flex" style={{ height: "80%" }}>
            <div
              className="col-md-4 bg-light"
              style={{ overflow: "auto", height: "100%" }}
            >
              <Card.Text>OnLine ({userBlock.length}):</Card.Text>
              <ul className="list-group list-group-flush list-unstyled text-left d-none d-md-block">
                {userBlock}
              </ul>
            </div>

            <div className="col-md-8 text-left">
              <div
                ref={messagesRef}
                style={{
                  textAlign: "left",
                  overflow: "auto",
                  height: "100%",
                }}
              >
                <ul className="list-group list-unstyled">
                  {messagesBlock({ messagesList, userName })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12" style={{ height: "20%" }}>
            <hr className="m-2" />
            <h6 style={{ textAlign: "center" }}>
              unregistered users cannot chat
            </h6>
            <div className="d-flex">
              <textarea
                className="w-100 p-1 focus-none"
                style={{
                  resize: "none",
                  height: "40px",
                  marginRight: "5px",
                }}
                placeholder="Message"
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
              ></textarea>
              <Button variant="secondary" onClick={sendMessage}>
                Send
              </Button>
            </div>
          </div>
        </Card>
      </Row>
    </div>
  );
};
