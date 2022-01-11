import { FunctionComponent } from "react";
import { Container, Row } from "react-bootstrap";

export const NotFoundPage: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <div className="col-md-12 text-center">
          <h1 className="mt-5">Oops!</h1>
          <h2>404 Not Found</h2>
          <div className="mb-3">
            Sorry, an error has occured, Requested page not found!
          </div>
          <div className="mt-2 mb-2">
            <a
              href="/"
              className="btn btn-secondary btn-md"
              style={{ marginRight: "20px" }}
            >
              Main Page{" "}
            </a>
            <a
              href="/support"
              className="btn btn-secondary btn-md"
              style={{ marginRight: "20px" }}
            >
              Support{" "}
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
};
