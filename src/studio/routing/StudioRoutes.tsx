import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { TabPanel } from "studio/components/TabPanel/TabPanel";

export const StudioRoutes: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="studio/:id" element={<TabPanel />} />
    </Routes>
  );
};
