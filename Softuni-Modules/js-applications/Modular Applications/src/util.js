export function getUserData(){
    return JSON.parse(localStorage.getItem('user'))
}

export function getAcessToken(){
    let user = getUserData();
    if(user){
        return user.getAcessToken;
    } else {
        return null; 
    }
}

export function clearUserData(){
    localStorage.removeItem('user')
}

export function setUserData(data){
    localStorage.setItem('user', JSON.stringify(data))
}

export function createSubmitHandler(ctx, handler){ // like an event handler
    return function (e){
    e.preventDefault();
    let formData = Object.entries(new FormData(e.target)) // gives me an obj
    handler(ctx, formData, e)
    }
}