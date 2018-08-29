const local = require('./localStrategy');
const { User } = require('../models');


module.exports = (passport) => {
    passport.serializeUser((user, done) =>{
        done(null, user.email);
    });

    passport.deserializeUser((email, done) =>{
        User.find({ where : {email}})
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    local(passport);

}