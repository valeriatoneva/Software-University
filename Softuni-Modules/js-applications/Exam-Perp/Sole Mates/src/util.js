export function getUserData(){
    return JSON.parse(localStorage.getItem('userData'))

}
export function setUserData(data){
   localStorage.setItem('userData', JSON.stringify)
    
}
export function clearUserData(){
    localStorage.removeItem('userData')
    
}