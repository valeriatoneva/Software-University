import * as request from '.requester.js'
import { get } from './requester'
const baseUrl = 'http://localhost:3030/users'

const saveUser = (user) => {
    if(user.acessToken){
        localStorage.setItem('user', JSON.stringify(user)) // key,value
    }  
}

const clearUser = (user) => {
    localStorage.removeItem('user')
}

export const getUser = () => {
    let serializedUser = localStorage.getItem('user');

    if(serializedUser){
        let user = JSON.parse(serializedUser); // if no user it returns undefined
        return user;
    }
}

export const login = (email, password) => {
    return request.post(`${baseUrl}/login`, {email, password})
    .then(users => {
     saveUser(user)
     then
    })
}

export const register = (email, password) => {
    return request.post(`${baseUrl}/register`, {email, password})
    .then(users => {
     saveUser(user)
     then
    })
}

export const logout = () => {
    fetch(`${baseUrl}/logout`, {headers: { 'X-Authorization': getToken()}})
    .then(()=> {
     clearUser();
    })
}

const getToken = () => {
    return getUser()?.accessToken // if this is not null or unf give me accestoken 
}