const USERS_API = import.meta.env.VITE_USERS_API;

export async function fetchAllUsers() {
  const res = await fetch(`${USERS_API}`);
  const users = await res.json();
  return users;
}
