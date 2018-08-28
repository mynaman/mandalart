const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');

const router = express.Router();

router.get('/', (req, res) =>{    
    console.log('auth');
    res.send(JSON.stringify(req.user));
});


router.post('/join', isNotLoggedIn, async(req, res, next) => {
    const { email, password } = req.body;
    try{
        const exUser = await User.find({where : {email}});        
        if(exUser){
            req.flash('joinError', '이미 가입된 메일입니다.');
            return res.redirect('/');            
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email,
            password : hash,
            create_dt : Date.now(),
        });
        return res.redirect('/auth/login');
    } catch(error) {
        console.error(error);
        return next(error);
    }
});

router.get('/login', isNotLoggedIn , (req, res) =>{
    console.log(req.user);
    res.rend('success');
});

router.get('/logout', isLoggedIn , (req, res) =>{
    req.logout();
    req.session.destory();
    res.redirect('/');
});

module.exports = router;