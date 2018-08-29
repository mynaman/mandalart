const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User, Objective } = require('../models');

const router = express.Router();

router.get('/', (req, res) =>{        
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
        return res.redirect('/');
    } catch(error) {
        console.error(error);
        return next(error);
    }
});

router.post('/login', isNotLoggedIn , (req, res, next) =>{
    passport.authenticate('local', (authError, user, info) => {        
        if(authError){
            console.error(authError);
            return next(authError);
        }        
        if(!user){
            req.flash('loginError', info.message);            
            return res.redirect('/');
            
        }        
        return req.login(user, (loginError) => {
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }            
            const email = user.email;            
            Objective.findOne({where : {user_id :email}}).then((row) =>{
                if(row){                    
                    const obj_id = row.get().obj_id;
                    return res.redirect(`/objective/${obj_id}`);                    
                } else {
                    return res.redirect('/');
                }

            })
            .catch((err) => {
                console.error(err);
                return err;
            });
            
        });
    })(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) =>{        
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;