import { useEffect, useState } from "react";
import { getAllShips } from "../../services/shipsService";

export const AllAssetsList = () => {
  const [allShips, setAllShips] = useState([]);

  const getAndSetShips = () => {
    getAllShips().then((shipsArray) => {
      setAllShips(shipsArray);
    });
  };

  useEffect(() => {
    getAndSetShips();
  }, []);
};
