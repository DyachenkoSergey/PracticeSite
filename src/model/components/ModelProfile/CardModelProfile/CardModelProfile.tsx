import { FunctionComponent } from "react";
import { Card } from "react-bootstrap";

export const CardModelProfile: FunctionComponent = () => {
  return (
    <Card className="w-100 mb-2">
      <div>
        <img
          alt="/"
          src="https://via.placeholder.com/150"
          className="img-fluid w-100 h-auto"
        ></img>
      </div>
    </Card>
  );
};
