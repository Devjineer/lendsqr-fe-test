const addItemToLocalStore = <T>(key: string, item: T) => {
  localStorage.setItem(key, JSON.stringify(item));
};

const getItemFromLocalStore = (key: string) => {
  const item = localStorage.getItem(key);
  return item != null || item != undefined ? JSON.parse(item) : null;
};

export { addItemToLocalStore, getItemFromLocalStore as default };
