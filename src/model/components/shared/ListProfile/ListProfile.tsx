import { FunctionComponent } from "react";
import { ListGroupItem } from "react-bootstrap";

interface ListProfileProps {
  value?: string;
  title: string;
  style?: React.CSSProperties | undefined
}

export const ListProfile: FunctionComponent<ListProfileProps> = ({
  value,
  title,
  style,
}) => {
  return (
    <>
      <ListGroupItem style={style}>
        <strong style={{ paddingRight: "30px" }}>{title}</strong>
        {value}
      </ListGroupItem>
    </>
  );
};
