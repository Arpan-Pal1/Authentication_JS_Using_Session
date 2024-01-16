import { User } from "../models/user.model.js";
import session from "express-session";

async function registerUser (req, res) {
    
    const {name , email, password} = req.body

    if (!(name && email && password)) {
        console.log('CREDENTIALS ARE REQUIRED');
        return res.redirect('/api/v1/user/register')
    }

    const user = await User.create({name, email, password})

    const createdUser = await User.findById(user._id)

    if (!createdUser) {
        console.log('USER IS NOT CREATED');
        return res.redirect('/api/v1/user/register')
    }else{
        console.log('USER CREATED SUCCESSFULLY');
        return res.redirect('/api/v1/user/login')
    }

    
}
// log in

async function loginForm (req, res){
    if (req.user) {
        return res.redirect('/')
    }
    res.render('login')
}

async function login (req, res) {
    const {email, password} = req.body
    if (!( email && password)) {
        console.log('CREDENTIALS ARE REQUIRED');
        return res.redirect('/api/v1/user/login')
    }

    const user = await User.findOne({email})

    if (!user) {
        console.log('YOU ARE NOT REGISTER YET');
        return res.redirect('/api/v1/user/register')
    }

    if (user.password !== password) {
        console.log('INCORRECT PASSWORD');
        return res.redirect('/api/v1/user/login')
    }
    // console.log(user);
    req.session.user = user;
    req.session.save()
    console.log(req.session);
    res.redirect('/')
}

async function logout(req, res){
    req.session.destroy()
    res.redirect('/')
}
export { registerUser,loginForm, login, logout }