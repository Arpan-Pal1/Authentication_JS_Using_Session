import session from "express-session";

async function loginCheck (req, res, next){
    let sessionUser = req.session.user
    if (!sessionUser) {
        req.user = null
    }
    req.user = sessionUser
    next()
}

export {loginCheck}