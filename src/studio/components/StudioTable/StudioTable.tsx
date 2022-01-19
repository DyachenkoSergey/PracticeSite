import { FunctionComponent, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userIdSelector } from "store/selectors/auth";
import { getStudioModels } from "studio/api/studio";

interface IModel {
  userId: string;
  userName: string;
  userEmail: string;
  userTokens: number;
  isOnLine: boolean;
}

export const StudioTable: FunctionComponent = () => {
  const studioId = useSelector(userIdSelector);

  const [models, setModels] = useState<IModel[]>([]);

  useEffect(() => {
    getStudioModels(studioId).then((studioModels) => setModels(studioModels));
  }, [studioId]);

  const renderModel = models.map((model) => {
    return (
      <tr key={model.userId}>
        <td>{model.userName}</td>
        <td>{model.userEmail}</td>
        <td>{model.userTokens}</td>
        <td>{model.isOnLine ? "online" : "offline"}</td>
      </tr>
    );
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Model name</th>
          <th>Model email</th>
          <th>Model tokens</th>
          <th>online / offline</th>
        </tr>
      </thead>
      <tbody>
        {renderModel.length > 0 ? (
          renderModel
        ) : (
          <tr>
            <td colSpan={4}>You don't have models</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
