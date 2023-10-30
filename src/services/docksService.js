export const getAllDocks = () => {
  return fetch("http://localhost:8000/docks").then((res) => res.json());
};

export const getAllDocksAndAssignedHaulers = () => {
  return fetch("http://localhost:8000/docks/?_embed=hauler").then((res) =>
    res.json()
  );
};
