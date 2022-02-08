import { IMessagesBlockProps } from "interfaces/model";
import { Card } from "react-bootstrap";

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
