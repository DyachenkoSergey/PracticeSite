import { FunctionComponent } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { SignUpModel } from "../Tabs/SignUp";
import { StudioModels } from "../Tabs/StudioModels/StudioModels";

export const TabPanel: FunctionComponent = () => {
  return (
    <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="StudioModels">
        <Row className="justify-content-center">
          <Col sm={3}>
            <div>
              {/* <Nav variant="pills" className="flex-column"> */}
              <Nav className="flex-column red" variant="pills">
                <Nav.Item>
                  <Nav.Link
                    eventKey="StudioModels"
                    style={{ cursor: "pointer" }}
                  >
                    All models
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="SignUpModel"
                    style={{ cursor: "pointer" }}
                  >
                    Add new model
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col sm={9}>
            <div>
              <Tab.Content>
                <Tab.Pane eventKey="StudioModels">
                  <StudioModels />
                </Tab.Pane>
                <Tab.Pane eventKey="SignUpModel">
                  <SignUpModel />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};
