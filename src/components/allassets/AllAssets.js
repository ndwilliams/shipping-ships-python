import { useEffect, useState } from "react";
import { getAllShips } from "../../services/shipsService";
import { getAllDocks } from "../../services/docksService";
import { getAllHaulers } from "../../services/haulersService";

export const AllAssetsList = () => {
  const [allShips, setAllShips] = useState([]);
  const [allDocks, setAllDocks] = useState([]);
  const [allHaulers, setAllHaulers] = useState([]);

  const getAndSetShips = () => {
    getAllShips().then((shipsArray) => {
      setAllShips(shipsArray);
    });
  };

  const getAndSetDocks = () => {
    getAllDocks().then((docksArray) => {
      setAllDocks(docksArray);
    });
  };

  const getAndSetHaulers = () => {
    getAllHaulers().then((haulersArray) => {
      setAllHaulers(haulersArray);
    });
  };

  useEffect(() => {
    getAndSetShips();
    getAndSetDocks();
    getAndSetHaulers();
  }, []);

  return (
    <div>
      <div>
        <h2>Ships</h2>
        <article>
          {allShips.map((shipObject) => {
            return <div key={shipObject.id}>{shipObject.name}</div>;
          })}
        </article>
      </div>
      <div>
        <h2>Docks</h2>
        <article>
          {allDocks.map((dockObject) => {
            return <div key={dockObject.id}>{dockObject.location}</div>;
          })}
        </article>
      </div>
      <div>
        <h2>Haulers</h2>
        <article>
          {allHaulers.map((haulerObject) => {
            return <div key={haulerObject.id}>{haulerObject.name}</div>;
          })}
        </article>
      </div>
    </div>
  );
};
