import { Router } from "express";
import { loginCheck } from "../middkeware/loginCheck.middleware.js";


const indexRouter = Router()

indexRouter.route('/').get(loginCheck, (req, res) => {
    
    res.render('index', {user : req.user})
})

indexRouter.route('/secret').get(loginCheck, (req, res)=>{
    if (!req.user) {
        console.log('YOU MUST LOGIN FIRST TO SEE THE SECRET PAGE');
        return res.redirect('/api/v1/user/login')
    }

    res.render('secretpage')
})



export {indexRouter}