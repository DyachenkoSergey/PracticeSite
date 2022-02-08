import { FunctionComponent } from "react";
import { Button } from "react-bootstrap";

export const NoMatches: FunctionComponent = () => {
  return (
    <div className="p-5 mt-5" style={{ border: "2px dashed #6c757d" }}>
      <h3 style={{ color: "#6c757d" }}>
        Sorry! Looks like there aren't any cams available at this time that
        match your preference
      </h3>
      <Button
        variant="outline-light"
        className="bg-secondary mt-3"
        // onClick={pushToMainPage} Надо доделать -----------------------------
      >
        View all models
      </Button>
    </div>
  );
};
