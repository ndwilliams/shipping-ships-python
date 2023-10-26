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
          <ul>
            {allShips.map((shipObject) => {
              return <li key={shipObject.id}>{shipObject.name}</li>;
            })}
          </ul>
        </article>
      </div>
      <div>
        <h2>Docks</h2>
        <article>
          <ul>
            {allDocks.map((dockObject) => {
              return <li key={dockObject.id}>{dockObject.location}</li>;
            })}
          </ul>
        </article>
      </div>
      <div>
        <h2>Haulers</h2>
        <article>
          <ul>
            {allHaulers.map((haulerObject) => {
              return <li key={haulerObject.id}>{haulerObject.name}</li>;
            })}
          </ul>
        </article>
      </div>
    </div>
  );
};
