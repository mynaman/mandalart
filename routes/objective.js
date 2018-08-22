const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{    
    res.render('objective', { name : 'jsman', age : 35, add : '인천'});
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('./');
});

module.exports = router;
