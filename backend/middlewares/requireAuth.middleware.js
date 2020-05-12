module.exports = {
    requireAuth
}

async function requireAuth(req, res, next){
    console.log('before Auth',req.session)
    if(!req.session.user || !req.session ){
        res.status(401).end('Access Denied!')
        return;
    }
    console.log('Next Test')
    next();
}

