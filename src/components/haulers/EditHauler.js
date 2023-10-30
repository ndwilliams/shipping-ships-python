import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllDocks } from "../../services/docksService";
import {
  editHauler,
  getHaulerByIdWithCurrentHauler,
} from "../../services/haulersService";

export const EditHauler = () => {
  const { haulerId } = useParams();
  const navigate = useNavigate();

  const [hauler, setHauler] = useState({});
  const [allDocks, setAllDocks] = useState([]);

  useEffect(() => {
    getHaulerByIdWithCurrentHauler(haulerId).then((haulerObj) =>
      setHauler(haulerObj)
    );

    getAllDocks().then((docksArray) => {
      setAllDocks(docksArray);
    });
  }, [haulerId]);

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedHauler = {
      id: hauler.id,
      name: hauler.name,
      dock_id: hauler.dock_id,
    };

    editHauler(updatedHauler).then(() => {
      navigate(`/haulingships`);
    });
  };

  return (
    <form>
      <h2>Edit Hauler</h2>
      <fieldset>
        <div>
          <label>Name:</label>
          <input
            name="name"
            value={hauler.name ? hauler.name : ""}
            placeholder="Hauler Name"
            onChange={(event) => {
              const haulerCopy = { ...hauler };
              haulerCopy.name = event.target.value;
              setHauler(haulerCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>Dock Assignment</div>
        <select
          name="dock_id"
          value={hauler.dock_id}
          onChange={(event) => {
            const haulerCopy = { ...hauler };
            haulerCopy.dock_id = event.target.value;
            setHauler(haulerCopy);
          }}
        >
          <option value={0}>Please select a Dock</option>
          {allDocks.map((dockObject) => {
            return (
              <option key={dockObject.id} value={dockObject.id}>
                {dockObject.location}
              </option>
            );
          })}
        </select>
      </fieldset>
      <button onClick={handleUpdate}>Update</button>
    </form>
  );
};
