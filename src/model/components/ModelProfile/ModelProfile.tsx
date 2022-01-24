import { IModelProfile } from "interfaces/model";
import { getModelProfile } from "model/api/models";
import { FunctionComponent, useEffect, useState } from "react";
import { Container, ListGroupItem, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userIdSelector } from "store/selectors/auth";
import { ListProfile } from "../shared/ListProfile";

export const ModelProfile: FunctionComponent = () => {
  const modelId = useSelector(userIdSelector);

  const [modelInfo, setModelInfo] = useState<IModelProfile>();

  useEffect(() => {
    getModelProfile(modelId).then((data) => {
      setModelInfo(data[0]);
    });
  }, [modelId]);

  const languagesArr = modelInfo?.languages?.map((item: any) => {
    return item.label;
  });
  const valuesLanguages = languagesArr?.map((item: string) => (
    <span
      style={{
        paddingRight: "5px",
        paddingLeft: "5px",
        display: "inline-block",
      }}
      key={item}
    >
      {item},
    </span>
  ));

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <div className="col-6 mb-5">
            <h3>My profile</h3>
            <ListGroup className="mt-3 m-auto" style={{ textAlign: "left" }}>
              <ListProfile value={modelInfo?.aboutMe} title="About me:" />
              <ListProfile value={modelInfo?.age} title="Age:" />
              <ListProfile value={modelInfo?.country} title="Country:" />
              <ListGroupItem>
                <strong style={{ paddingRight: "30px" }}>Languages:</strong>
                {valuesLanguages}
              </ListGroupItem>
              <ListProfile value={modelInfo?.birthday} title="Birthday:" />
              <ListProfile value={modelInfo?.gender} title="Gender:" />
              <ListProfile
                value={modelInfo?.sexualPreference}
                title="Sexual preference:"
              />
              <ListProfile value={modelInfo?.ethnicity} title="Ethnicity:" />
              <ListProfile value={modelInfo?.eyes} title="Eyes:" />
              <ListProfile value={modelInfo?.hair} title="Hair:" />
              <ListProfile value={modelInfo?.bodyType} title="Body type:" />
            </ListGroup>
          </div>
        </Row>
      </Container>
    </>
  );
};
