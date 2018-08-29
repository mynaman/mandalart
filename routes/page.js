const express = require('express');
// const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', (req, res) => {        
    console.log(req.user);
     res.render('objectiveEdit', {
         user : req.user,
         loginError : req.flash('loginError'),
         joinError : req.flash('joinError'),         
     });
});

// router.get('/join', isNotLoggedIn, (req, rese) => {
//     res.render('')
// })


module.exports = router;