import IndexedDbSerice from "./IndexedDbService";

const getTasks = () => {
  return IndexedDbSerice.getAllData("tasks");
};

const setTask = (task = {}, key = null) => {
  return IndexedDbSerice.setData(task, "tasks", key);
};

export default { setTask, getTasks };
