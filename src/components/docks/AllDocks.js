import { useEffect, useState } from "react";
import { getAllDocksAndAssignedHaulers } from "../../services/docksService";

export const AllDocks = () => {
  const [allDocksAndTheirHaulers, setAllDocksAndTheirHaulers] = useState([]);

  const fetchAndSetDocks = () => {
    getAllDocksAndAssignedHaulers().then((docksArray) => {
      setAllDocksAndTheirHaulers(docksArray);
    });
  };
  useEffect(() => {
    fetchAndSetDocks();
  }, []);

  return (
    <>
      <h2>All Docks</h2>
      <ul>
        {allDocksAndTheirHaulers.map((dockObject) => {
          return (
            <li key={dockObject.id}>
              {dockObject.location}
              <span>Dock Capacity: {dockObject.capacity}</span>
              <ul>
                {" "}
                Currently Assigned Haulers
                {dockObject.haulers.map((haulersObj) => {
                  return <li>{haulersObj.name}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};
