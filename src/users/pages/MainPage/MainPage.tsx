/* eslint-disable react-hooks/exhaustive-deps */
import { ModelCard } from "model/components/ModelCart";
import { FunctionComponent, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Aside } from "users/components/Aside";
import { useDispatch, useSelector } from "react-redux";
import { modelsSelector, searchModelsSelector } from "store/selectors/models";
import { getModels } from "store/slices/models";
import { IUser } from "interfaces/user";

export const MainPage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const modelsList = useSelector(modelsSelector);
  const foundModels = useSelector(searchModelsSelector);

  useEffect(() => {
    dispatch(getModels(foundModels));
  }, [foundModels]);

  const renderModel = modelsList.map((model: IUser) => (
    <ModelCard model={model} key={model.userId} />
  ));

  return (
    <>
      {modelsList ? (
        <Container fluid style={{ minHeight: "80vh" }}>
          <Row>
            <div className="col-12 p-4">
              <Row>
                <div className="d-flex flex-wrap pb-5 col-md-8 col-sm-12">
                  {renderModel}
                </div>
                <div className="col-md-1 col-sm-0"></div>
                <div className="col-md-3 col-sm-12 pb-5">
                  <Aside />
                </div>
              </Row>
            </div>
          </Row>
        </Container>
      ) : null}
    </>
  );
};
