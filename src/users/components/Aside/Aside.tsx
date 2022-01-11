import { IUser } from "interfaces/user";
import { FunctionComponent, useEffect, useState } from "react";
import { getTopModels } from "../../../model/api/models";
import { TopModels } from "./TopModels";

export const Aside: FunctionComponent = () => {
  const [models, setModels] = useState<IUser[]>([]);

  useEffect(() => {
    getTopModels().then((data) => setModels(data));
  }, []);

  return <TopModels models={models} />;
};
