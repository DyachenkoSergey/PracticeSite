/* eslint-disable react-hooks/exhaustive-deps */

import { FunctionComponent } from "react";
import { Container, Row } from "react-bootstrap";
import { Aside } from "users/components/Aside";
// import { ModelCard } from "model/components/ModelCart";
// import { useDispatch, useSelector } from "react-redux";
// import { modelsSelector, searchModelsSelector } from "store/selectors/models";
// import { getModels } from "store/slices/models";
// import { IUser } from "interfaces/user";
import { Filtration } from "users/components/Filtration";
// import { NoMatches } from "sharedComponents/NoMatches";
import { Outlet } from "react-router-dom";
// Route, Routes
// import { MainPart } from "./MainPart";

export const MainPage: FunctionComponent = () => {
  // const dispatch = useDispatch();
  // const modelsList = useSelector(modelsSelector);
  // const foundModels = useSelector(searchModelsSelector);

  // useEffect(() => {
  //   dispatch(getModels(foundModels));
  // }, [foundModels]);

  // const renderModel = modelsList.map((model: IUser) => (
  //   <ModelCard model={model} key={model.userId} />
  // ));

  return (
    <>
      <Container fluid style={{ minHeight: "80vh" }}>
        <Row className="justify-content-between">
          <div className="col-12 p-4">
            <Row className="pb-5">
              <div className="col-md-2 col-sm-12">
                <Filtration />
              </div>
              <Outlet />
              <div className="col-md-2 col-sm-12 ">
                <Aside />
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
  // return (
  //   <>
  //     <Container fluid style={{ minHeight: "80vh" }}>
  //       <Row className="justify-content-between">
  //         <div className="col-12 p-4">
  //           <Row className="pb-5">
  //             <div className="col-md-10 col-sm-12">
  //               <FiltrationRenderModels />
  //             </div>
  //             <div className="col-md-2 col-sm-12 ">
  //               <Aside />
  //             </div>
  //           </Row>
  //         </div>
  //       </Row>
  //     </Container>
  //   </>
  // );

  // const dispatch = useDispatch();
  // const modelsList = useSelector(modelsSelector);
  // const foundModels = useSelector(searchModelsSelector);

  // useEffect(() => {
  //   dispatch(getModels(foundModels));
  // }, [foundModels]);

  // const renderModel = modelsList.map((model: IUser) => (
  //   <ModelCard model={model} key={model.userId} />
  // ));

  // return (
  //   <>
  //     <Container fluid style={{ minHeight: "80vh" }}>
  //       <Row className="justify-content-between">
  //         <div className="col-12 p-4">
  //           <Row className="pb-5">
  //             <div className="col-md-2 col-sm-12">
  //               <Filtration />
  //             </div>
  //             <div
  //               className="col-md-8 col-sm-12"
  //               style={{
  //                 display: "flex",
  //                 flexWrap: "wrap",
  //                 justifyContent: "center",
  //                 alignContent: "flex-start",
  //               }}
  //             >
  //               {renderModel.length > 0 ? renderModel : <NoMatches />}
  //             </div>
  //             <div className="col-md-2 col-sm-12 ">
  //               <Aside />
  //             </div>
  //           </Row>
  //         </div>
  //       </Row>
  //     </Container>
  //   </>
  // );
};
