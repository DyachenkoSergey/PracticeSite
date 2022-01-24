import { socket } from "constants/socket";
import { getModel } from "model/api/models";
import { ChatModelRoom } from "model/components/ChatModelRoom";
import { ModelBlock } from "../ModelBlock";
import { FunctionComponent, useEffect, useState } from "react";
import { Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { userIdSelector, userNameSelector } from "store/selectors/auth";
import { IModelProfile } from "interfaces/model";
import { ListProfile } from "../shared/ListProfile";

export const ModelRoom: FunctionComponent = () => {
  const userId = useSelector(userIdSelector);
  const userName = useSelector(userNameSelector);

  const location = useLocation();
  const params = useParams();

  const [modelName, setModelName] = useState("");
  const [modelProfile, setModelProfile] = useState<IModelProfile>();

  useEffect(() => {
    if (params.id) {
      getModel(params.id).then((model) => {
        setModelName(model.userName);
        setModelProfile(model.userProfile[0]);
      });
    }
    socket.emit("ROOM:JOIN", {
      roomId: params.id,
      userName: userName,
    });
    return () => {
      socket.emit("ROOM:LEAVE", {
        roomId: params.id,
        userName: userName,
      });
    };
  }, [params.id, userId, userName, location.search]);

  const languagesArr = modelProfile?.languages?.map((item: any) => {
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
      <Container fluid>
        <Row>
          <div className="col-12">
            <h4 className="text-secondary">
              Welcome to <strong className="m-2"> {modelName} </strong> room
            </h4>
            <Row>
              <div className="col-md-7 col-sm-12 pr-2">
                <ModelBlock />
                <div>
                  <ListGroup
                    variant="flush"
                    className="mt-3 m-auto mb-4"
                    style={{ textAlign: "left" }}
                  >
                    <ListProfile
                      value={modelProfile?.aboutMe}
                      style={{ borderBottom: "none" }}
                      title="About me:"
                    />
                    <ListProfile
                      value={modelProfile?.age}
                      style={{ borderBottom: "none" }}
                      title="Age:"
                    />
                    <ListProfile
                      value={modelProfile?.country}
                      style={{ borderBottom: "none" }}
                      title="Country:"
                    />
                    <ListGroupItem style={{ borderBottom: "none" }}>
                      <strong style={{ paddingRight: "30px" }}>
                        Languages:
                      </strong>
                      {valuesLanguages}
                    </ListGroupItem>
                    <ListProfile
                      value={modelProfile?.birthday}
                      style={{ borderBottom: "none" }}
                      title="Birthday:"
                    />
                    <ListProfile
                      value={modelProfile?.gender}
                      style={{ borderBottom: "none" }}
                      title="Gender:"
                    />
                    <ListProfile
                      value={modelProfile?.sexualPreference}
                      style={{ borderBottom: "none" }}
                      title="Sexual preference:"
                    />
                    <ListProfile
                      value={modelProfile?.ethnicity}
                      style={{ borderBottom: "none" }}
                      title="Ethnicity:"
                    />
                    <ListProfile
                      value={modelProfile?.eyes}
                      style={{ borderBottom: "none" }}
                      title="Eyes:"
                    />
                    <ListProfile
                      value={modelProfile?.hair}
                      style={{ borderBottom: "none" }}
                      title="Hair:"
                    />
                    <ListProfile
                      value={modelProfile?.bodyType}
                      style={{ borderBottom: "none" }}
                      title="Body type:"
                    />
                  </ListGroup>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 pr-3">
                <ChatModelRoom roomId={params.id} userName={userName} />
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};
