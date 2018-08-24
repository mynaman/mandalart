const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
     res.render('objectiveEdit', { title : 'mandalart'});
});

module.exports = router;