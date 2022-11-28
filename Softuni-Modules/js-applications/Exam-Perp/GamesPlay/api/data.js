import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific request
// get all listings
export async function getAllGames() {
  return await api.get(host + "/data/games?sortBy=_createdOn%20desc");
}
// get new games
export async function getNewGames(){
  return await api.get(host + "/data/games?sortBy=_createdOn%20desc&distinct=category")
}

// create listing
export async function createGame(game) {
  return await api.post(host + "/data/games", game);
}

// get listing by id
export async function getGameById(id) {
  return await api.get(host + `/data/games/${id}`);
}

// edit listing by id
export async function editGameById(id, game) {
  return await api.put(host + `/data/games/${id}`, game);
}

// delete listing by id
export async function deleteGameById(id) {
  return await api.del(host + `/data/games/${id}`);
}

export async function apply(gameId) {
  return await api.post(host + `/data/applications`, gameId);
}

export async function getTotalApplications(gameId) {
  return await api.get(
    host +
      `/data/applications?where=gameId%3D%22${gameId}%22&distinct=_ownerId&count`
  );
}

export async function didUserApplied(gameId, userId) {
  return await api.get(
    host +
      `/data/applications?where=gameId%3D%22${gameId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
