import getItemFromLocalStore, {
  addItemToLocalStore,
} from "@/utils/local-store";

const USERS_API = import.meta.env.VITE_USERS_API;

export async function fetchAllUsers() {
  let users = getItemFromLocalStore("users");
  if (users) return users;
  
  const res = await fetch(`${USERS_API}`);
  users = await res.json();
  addItemToLocalStore("users", users);
  return users;
}
