export const getAllShips = () => {
  return fetch("http://localhost:8000/ships").then((res) => res.json());
};

export const getShipsWithHauler = () => {
  return fetch("http://localhost:8000/ships?_expand=hauler").then((res) =>
    res.json()
  );
};

export const deleteShipByShipId = (shipId) => {
  return fetch(`http://localhost:8000/ships/${shipId}`, {
    method: "DELETE",
  });
};
