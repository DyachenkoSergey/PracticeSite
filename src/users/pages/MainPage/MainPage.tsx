import { ModelCard } from "model/modelCart";
import { FunctionComponent, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getAllModelsAPI } from "model/api/getAllModels";

interface IModel {
  name: string;
  age: string;
  role: string;
  video: string;
  id: string;
}

export const MainPage: FunctionComponent = () => {
  const [models, setModels] = useState<IModel[]>([]);

  useEffect(() => {
    getAllModelsAPI().then((data) => {
      setModels(data);
    });
  }, []);
  const renderModel = models.map((item) => (
    <ModelCard item={item} key={item.id} />
  ));

  return (
    <Container fluid>
      <Row>
        <div className="col-12 p-4">
          <Row>
            <div className="d-flex flex-wrap pb-5 col-md-8 col-sm-12">
              {renderModel}
            </div>
            <div className="col-md-1 col-sm-0"></div>
            <div
              style={{ height: 600 }}
              className="bg-dark col-md-3 col-sm-12 pb-5"
            ></div>
          </Row>
        </div>
      </Row>
    </Container>
  );
};
