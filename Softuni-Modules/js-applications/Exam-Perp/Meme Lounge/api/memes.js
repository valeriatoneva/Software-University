import { get } from './api.js';
import { post } from './api.js';
import { put } from './api.js';
import { del } from './api.js';

export async function getAllMemes(){
    return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getMemeByUser(userId){
    return get('/data/memes' + id)
}

export async function getMemeById(id){
    return get('/data/memes' + id)
}
export async function createMeme(meme){
    return post('/data/memes', meme)
}

export async function deleteMeme(id){
    return del('/data/memes' + id);
}

export async function updateMeme(id, name){
    return del('/data/memes' + id, meme);
}