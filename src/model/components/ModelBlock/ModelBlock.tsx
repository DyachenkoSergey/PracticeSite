import { StreamVideo } from "../ModelRoom/StreamVideo";
import { FunctionComponent } from "react";
import { Card } from "react-bootstrap";

interface IModelBlock {
  previousModelId: string;
  nextModelId: string;
}

export const ModelBlock: FunctionComponent<IModelBlock> = ({
  previousModelId,
  nextModelId,
}) => {
  return (
    <Card className="w-100, h-100">
      <Card.Body className="w-100, h-auto">
        <StreamVideo
          previousModelId={previousModelId}
          nextModelId={nextModelId}
        />
      </Card.Body>
    </Card>
  );
};
