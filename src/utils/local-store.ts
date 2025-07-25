const addItemToLocalStore = <T>(key: string, item: T) => {
  localStorage.setItem(key, JSON.stringify(item));
};

const getItemFromLocalStore = (key: string) => {
  const item = localStorage.getItem(key);
  if (!item) throw new Error(`${key} not found`);
  return JSON.parse(item);
};

export { addItemToLocalStore, getItemFromLocalStore as default };
