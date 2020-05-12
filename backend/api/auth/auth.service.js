const userService = require('../users/users.service')

module.exports = {
    login,
    signup
}

async function login(email, password) {
    if (!email || !password) return Promise.reject('email and password are required!')

    let user = await userService.getByEmail(email);
    if (!user) return Promise.reject('Email or Password Invalid');
    const match = (user.password === password) ? true : false
    if (!match) return Promise.reject('Email or Password are invalid');

    // delete user.password;
    return user;

}

async function signup(email, password, username) 
{   if(!email || !password || !username) return Promise.reject('Missing Details')
    let user = await userService.add(email, password, username);
    return user;
}