import { FunctionComponent } from "react";
import { Container, Row } from "react-bootstrap";
import { StudioTable } from "studio/components/StudioTable";

export const StudioModels: FunctionComponent = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <div className="col-12">
          <h3 className="mb-3">All models</h3>
          <StudioTable />
        </div>
      </Row>
    </Container>
  );
};
