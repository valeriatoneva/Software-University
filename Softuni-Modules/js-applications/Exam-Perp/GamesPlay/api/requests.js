import { get } from './api.js';
import { post } from './api.js';
import { put } from './api.js';
import { del } from './api.js';

export async function getAllGames(){
    return get(`/data/games?sortBy=_createdOn%20desc`) // check
}
export async function getNewGames(){
    return get('/data/games?sortBy=_createdOn%20desc&distinct=category')
}
export async function getGameById(id){
    return get('/data/games/' + id) // check
}
export async function createGame(game){ // check
    return post('/data/games', game)
}

export async function editGame(id){ // check 
    return put('/data/games' + id);
}

export async function deleteGame(id){ // check
    return del('/data/games' + id);
}

