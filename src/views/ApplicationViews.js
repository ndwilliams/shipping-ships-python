import { Outlet, Route, Routes } from "react-router-dom";
import { AllAssetsList } from "../components/allassets/AllAssets";
import { Navbar } from "../components/nav/NavBar";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route index element={<AllAssetsList />} />
      </Route>
    </Routes>
  );
};
