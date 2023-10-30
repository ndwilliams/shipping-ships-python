import { Outlet, Route, Routes } from "react-router-dom";
import { AllAssetsList } from "../components/allassets/AllAssets";
import { Navbar } from "../components/nav/NavBar";
import { ShipsView } from "../components/ships/AllShips";
import { HaulersView } from "../components/haulers/AllHaulers";
import { EditHauler } from "../components/haulers/EditHauler";
import { AllDocks } from "../components/docks/AllDocks";

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

        <Route path="/haulingships">
          <Route path="" element={<HaulersView />} />
          <Route path=":haulerId" element={<EditHauler />} />
        </Route>
        <Route path="/docks" element={<AllDocks />} />
      </Route>
    </Routes>
  );
};
