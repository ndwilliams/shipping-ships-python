import { useEffect, useState } from "react";
import {
  deleteShipByShipId,
  getShipsWithHauler,
} from "../../services/shipsService";

export const ShipsView = () => {
  const [shipsAndHauler, setShipsAndHauler] = useState([]);

  const fetchAndSetShipsAndHaulers = () => {
    getShipsWithHauler().then((shipsAndHaulersArray) => {
      setShipsAndHauler(shipsAndHaulersArray);
    });
  };

  useEffect(() => {
    fetchAndSetShipsAndHaulers();
  }, []);

  const handleDelete = (shipId) => {
    deleteShipByShipId(shipId).then(fetchAndSetShipsAndHaulers);
  };

  return (
    <div>
      <h2>Ships and Respective Haulers</h2>
      <div>
        <ul>
          {shipsAndHauler.map((shipHaulerObject) => {
            return (
              <li key={shipHaulerObject.id}>
                Ship Name: {shipHaulerObject.name}
                <span> Hauler: {shipHaulerObject.hauler.name} </span>
                <span>
                  <button
                    key={shipHaulerObject.id}
                    onClick={() => {
                      handleDelete(shipHaulerObject.id);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
