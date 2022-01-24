import { StreamVideo } from "../ModelRoom/StreamVideo";
import { FunctionComponent } from "react";
import { Card } from "react-bootstrap";

export const ModelBlock: FunctionComponent = () => {
  return (
    <Card className="w-100, h-auto">
      <Card.Body className="w-100, h-auto">
        <StreamVideo />
      </Card.Body>
    </Card>
  );
};
