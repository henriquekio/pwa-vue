import localforage from "localforage";

localforage.config({
  name: "task-list",
  version: 1.0,
  description: "used for task list"
});

const getAllData = async (storeName = "") => {
  try {
    localforage.config({ storeName });
    let tasks = [];
    await localforage.iterate((value, key) => {
      tasks.push({ key, value });
    });
    return tasks;
  } catch (e) {
    throw e;
  }
};

const setData = async (value, storeName = "", id = null) => {
  try {
    localforage.config({ storeName });
    const key = id || ((await localforage.length()) + 1).toString();
    await localforage.setItem(key, value);
  } catch (e) {
    throw e;
  }
};

export default { setData, getAllData };
