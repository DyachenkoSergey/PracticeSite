/* eslint-disable react-hooks/exhaustive-deps */

import { IUser } from "interfaces/user";
import { ModelCard } from "model/components/ModelCart";
import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { NoMatches } from "sharedComponents/NoMatches";
import { modelsSelector, searchModelsSelector } from "store/selectors/models";
import { getModels } from "store/slices/models";

export const MainPart: FunctionComponent = () => {
  const dispatch = useDispatch();
  const modelsList = useSelector(modelsSelector);
  const queryParam = useSelector(searchModelsSelector);

  const params = useParams();
  const key = Object.keys(params)[0];
  const value = Object.values(params)[0];

  const searchQueryParam = queryParam.searchQueryParam;

  useEffect(() => {
    dispatch(getModels({ searchQueryParam, value: { [key]: value } }));
  }, [params, searchQueryParam]);

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
      {renderModel.length > 0 ? renderModel : <NoMatches />}
    </div>
  );
};
