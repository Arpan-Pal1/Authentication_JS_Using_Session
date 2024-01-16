import { Router } from "express";
import { registerUser, loginForm, login, logout } from "../controlers/user.controler.js";
import { loginCheck } from "../middkeware/loginCheck.middleware.js";

const userRoute = Router()

userRoute.route('/register').get(loginCheck, (req, res)=>{
    if (req.user) {
        return res.redirect('/')
    }
    res.render('register')
})
.post(registerUser)

userRoute.route('/login')
.get(loginCheck, loginForm)
.post(login)

userRoute.route('/logout').get(logout)



export default userRoute
