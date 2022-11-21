import { clearUserData } from "../src/util.js";
import { setUserData } from "../src/util.js";
import { get, post } from "./api.js";

export async function login(email, password) {
  const result = await post("/users/login", { email, password });

  const userData = {
    id: result._id,
    username: result.username,
    email: result.email,
    gender: result.gender,
    accessToken: result.accessToken,
  };

  setUserData(userData);

  return result;
}
export async function register(username, email, password, gender) {
  // look at the register section
  const result = await post("/users/login", {
    username,
    email,
    password,
    gender,
  });

  const userData = {
    id: result._id,
    username: result.username,
    email: result.email,
    gender: result.gender,
    accessToken: result.accessToken,
  };

  setUserData(userData);

  return result;
}
export function logout() {
  get('/users/logout');
  clearUserData()
}
