import { ModelCard } from "model/modelCart";
import { FunctionComponent, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getAllModels } from "model/api/models";
import { IModel } from "interfaces/model";
import { Aside } from "../../components/Aside";

export const MainPage: FunctionComponent = () => {
  const [models, setModels] = useState<IModel[]>([]);

  useEffect(() => {
    getAllModels().then((data) => {
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
            <div className="col-md-3 col-sm-12 pb-5">
              <Aside />
            </div>
          </Row>
        </div>
      </Row>
    </Container>
  );
};
