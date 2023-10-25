import { Routes, Route } from "react-router-dom";
import { ApplicationViews } from "./views/ApplicationViews";

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<ApplicationViews />} />
    </Routes>
  );
};
