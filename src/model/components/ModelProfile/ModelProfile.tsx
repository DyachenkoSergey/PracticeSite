import { IModelProfile } from "interfaces/model";
import { getModelProfile } from "model/api/models";
import { FunctionComponent, useEffect, useState } from "react";
import { Container, ListGroupItem, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { ListProfile } from "../shared/ListProfile";
import { CardModelProfile } from "./CardModelProfile";

export const ModelProfile: FunctionComponent = () => {
  const params = useParams();

  const [modelInfo, setModelInfo] = useState<IModelProfile>();

  useEffect(() => {
    if (params.id) {
      getModelProfile(params.id).then((data) => {
        setModelInfo(data);
      });
    }
  }, [params.id]);

  const languagesArr = modelInfo?.languages?.map((item: any) => {
    return item.label;
  });
  const valuesLanguages = languagesArr?.map((item: string) => (
    <span
      style={{
        paddingRight: "10px",
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
          <h3>
            <strong>{modelInfo?.userName}</strong>
          </h3>
          <div
            className="col-md-2 mr-3 mt-3 order-2 order-md-1 pt-3 mb-3"
            style={{ border: "5px solid #999", borderRadius: "5px" }}
          >
            <h4 style={{ textAlign: "left" }}>
              My
              <br />
              Most
              <br />
              Recent
              <br />
              Pictures
            </h4>
            <div className="text-center">
              <CardModelProfile />
              <CardModelProfile />
              <CardModelProfile />
              <CardModelProfile />
              <CardModelProfile />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mb-5 order-1 order-md-2">
            <ListGroup
              className="mt-3 m-auto p-2"
              style={{ textAlign: "left", border: "5px solid #999" }}
            >
              <ListProfile value={modelInfo?.aboutMe} title="About me:" />
              <ListProfile value={modelInfo?.age} title="Age:" />
              <ListProfile value={modelInfo?.country} title="Country:" />
              <ListGroupItem style={{ border: "none", display: "flex" }}>
                <strong style={{ display: "inline-block", width: "150px" }}>
                  Languages:
                </strong>
                <div>{valuesLanguages}</div>
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

              <ListProfile value={modelInfo?.weight} title="Weight:" />
              <ListProfile value={modelInfo?.height} title="Height:" />
              <ListProfile value={modelInfo?.bodyType} title="Body type:" />
              <ListProfile value={modelInfo?.smoke} title="Smoke:" />
              <ListProfile value={modelInfo?.drink} title="Drink:" />
              <ListProfile value={modelInfo?.drugs} title="Drugs:" />
              <ListProfile value={modelInfo?.talents} title="Talents:" />
              <ListProfile
                value={modelInfo?.maritalStatus}
                title="Martial status:"
              />
              <ListProfile
                value={modelInfo?.occupationMajor}
                title="Occupation / Major:"
              />
              <ListProfile
                value={modelInfo?.favoriteFood}
                title="Favorite food:"
              />
              <ListProfile value={modelInfo?.automobile} title="Automobile:" />
            </ListGroup>
          </div>
        </Row>
      </Container>
    </>
  );
};
