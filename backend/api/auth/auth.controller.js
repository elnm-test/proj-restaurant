const authService = require('./auth.service')


module.exports = {
    doLogout,
    doLogin,
    doSignup
}


async function doSignup(req, res) {
    const { email, password, username } = req.body;
    try {
        let user = await authService.signup(email, password, username);
        //Or doLogin (email , password)
        await authService.login(email, password);
        req.session.user = user;
        req.session.save();
        res.json(user)
    } catch (err) {
        res.status(500).send({ err })
    }

}



async function doLogin(req, res) {
    const { email, password } = req.body;
    try {
        let user = await authService.login(email, password);
        if(user){
            req.session.user = user;
        }
        res.json(user)
    } catch (err) {
        res.status(401).send({ err })
    }

}


async function doLogout(req, res) {
    try {
        req.session.destroy();
        res.send('User Logged Out')
    } catch (err) {
        res.status(500).send({ err })
    }
}

