import { FunctionComponent } from "react";
import { ListGroupItem } from "react-bootstrap";

interface ListProfileProps {
  value?: string;
  title: string;
}

export const ListProfile: FunctionComponent<ListProfileProps> = ({
  value,
  title,
}) => {
  return (
    <>
      <ListGroupItem style={{ border: "none" }}>
        <strong style={{ display: "inline-block", width: "150px" }}>
          {title}
        </strong>
        {value}
      </ListGroupItem>
    </>
  );
};
