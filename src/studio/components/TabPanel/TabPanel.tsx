import "./styles.css";
import { FunctionComponent } from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { SignUpModel } from "../Tabs/SignUp";
import { StudioModels } from "../Tabs/StudioModels/StudioModels";
import { useDispatch, useSelector } from "react-redux";
import { setStudioDefaultKey } from "store/slices/models";
import { studioDefaultKey } from "store/selectors/models";

export const TabPanel: FunctionComponent = () => {
  const dispatch = useDispatch();
  const defaultKey = useSelector(studioDefaultKey);

  const defaultStudioModels = () => {
    dispatch(setStudioDefaultKey("StudioModels"));
  };
  const defaultSignUpModel = () => {
    dispatch(setStudioDefaultKey("SignUpModel"));
  };

  return (
    <Container style={{ minHeight: "80vh" }}>
      <Tab.Container id="left-tabs-example" defaultActiveKey={defaultKey}>
        <Row className="justify-content-center">
          <Col sm={3}>
            <div>
              <Nav className="flex-column red" variant="pills">
                <Nav.Item>
                  <Nav.Link
                    eventKey="StudioModels"
                    style={{ cursor: "pointer" }}
                    onClick={defaultStudioModels}
                  >
                    All models
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="SignUpModel"
                    style={{ cursor: "pointer" }}
                    onClick={defaultSignUpModel}
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
