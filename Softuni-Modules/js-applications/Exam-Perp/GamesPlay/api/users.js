import * as api from './api.js';


export async function login(email, password) {
  const result = await post("/users/login", { email, password });

  const userData = {
    email: result.email,
  };

  setUserData(userData);

  return result;
}
export async function register(email, password) {
  // look at the register section
  const result = await post("/users/register", {
    email,
    password,
  });

  const userData = {
    id: result._id,
    email: result.email,
    accessToken: result.accessToken,
  };

  setUserData(userData);

  return result;
}
export function logout() {
  get('/users/logout');
  clearUserData()
}
