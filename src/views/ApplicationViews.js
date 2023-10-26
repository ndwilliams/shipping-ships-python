import { Outlet, Route, Routes } from "react-router-dom";
import { AllAssetsList } from "../components/allassets/AllAssets";
import { Navbar } from "../components/nav/NavBar";
import { ShipsView } from "../components/ships/AllShips";

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
        <Route path="/shippingships" element={<ShipsView />} />
      </Route>
    </Routes>
  );
};
