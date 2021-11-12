import { ChatModelRoom } from "model/ChatModelRoom";
import { ModelBlock } from "model/ModelBlock";
import { FunctionComponent } from "react";
import { Container, Row } from "react-bootstrap";

export const ModelRoom: FunctionComponent = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="col-md-8 pr-2">
            <ModelBlock />
          </div>
          <div className="col-md-4">
            <ChatModelRoom />
          </div>
        </Row>
      </Container>
    </>
  );
};
