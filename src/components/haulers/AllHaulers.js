import { useEffect, useState } from "react";
import { getAllHaulers } from "../../services/haulersService";
import { useNavigate } from "react-router-dom";

export const HaulersView = () => {
  const [allHaulers, setAllHaulers] = useState([]);

  const navigate = useNavigate();

  const getAndSetHaulers = () => {
    getAllHaulers().then((haulersArray) => {
      setAllHaulers(haulersArray);
    });
  };

  useEffect(() => {
    getAndSetHaulers();
  }, []);

  return (
    <div>
      <h2>Haulers</h2>
      <div>
        <ul>
          {allHaulers.map((haulerObject) => {
            return (
              <li key={haulerObject.id}>
                {haulerObject.name}
                <span>
                  <button
                    onClick={() => {
                      navigate(`/haulingships/${haulerObject.id}`);
                    }}
                  >
                    {" "}
                    Edit Hauler
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
