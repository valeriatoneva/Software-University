import { clearUserData } from "../util"
import { setUserData } from "../util"
import * as api from "./api.js"

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export async function login(email, password){
    let user = await api.post(endpoints.login, {email, password})
    setUserData(user)
    return user; 
}

export async function register(email, password){
    let user = await api.post(endpoints.register, {email, password})
    setUserData(user)
    return user; 
}

export async function logout(email, password){
    api.get(endpoints.logout)
    clearUserData()
}