/* eslint-disable react-hooks/exhaustive-deps */
import { IUser } from "interfaces/user";
import { ModelCard } from "model/components/ModelCart";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { NoMatches } from "sharedComponents/NoMatches";
import { modelsSelector } from "store/selectors/models";

export const RenderModels: FunctionComponent = () => {
  const modelsList = useSelector(modelsSelector);
  console.log(modelsList);

  const renderModel = modelsList.map((model: IUser) => (
    <ModelCard model={model} key={model.userId} />
  ));

  return (
    <div
      className="col-md-8 col-sm-12"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "flex-start",
      }}
    >
      {renderModel.length === 0 ? <NoMatches /> : renderModel}
    </div>
  );
};
