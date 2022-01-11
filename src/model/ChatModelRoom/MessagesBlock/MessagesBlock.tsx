import { Card } from "react-bootstrap";

interface IMessageList {
  roomId: string;
  userName: string;
  text: string;
}

interface IMessagesBlockProps {
  messagesList: IMessageList[] | null;
  userName: string;
}

export const messagesBlock = ({
  messagesList,
  userName,
}: IMessagesBlockProps) => {
  const letter = messagesList?.map((item, index) => {
    if (userName === item.userName) {
      return (
        <li
          key={index}
          className="list-group-item text-white"
          style={{ textAlign: "right", border: "none" }}
        >
          <div className="border rounded bg-primary d-inline-block p-2">
            <Card.Text style={{ maxWidth: "250px" }}>{item.text}</Card.Text>
          </div>

          <Card.Text>
            <span style={{ fontSize: "10px" }} className="text-dark">
              {item.userName}
            </span>
          </Card.Text>
        </li>
      );
    }
    return (
      <li
        key={index}
        className="list-group-item text-white"
        style={{ textAlign: "left", border: "none" }}
      >
        <div className="border rounded bg-primary d-inline-block p-2">
          <Card.Text>{item.text}</Card.Text>
        </div>

        <Card.Text>
          <span style={{ fontSize: "10px" }} className="text-dark">
            {item.userName}
          </span>
        </Card.Text>
      </li>
    );
  });

  return messagesList ? letter : null;
};
