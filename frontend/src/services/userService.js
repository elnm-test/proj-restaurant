import httpService from "./httpService"

export default {
    doLogin,
    doLogout
}

async function doLogin(userCred) {
    let user = await httpService.post('api/auth/login', userCred);
    if(user) _handleLogin(user);
    return user;
}

async function doLogout(){
    await httpService.post('api/auth/logout');
    sessionStorage.clear();
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
}

