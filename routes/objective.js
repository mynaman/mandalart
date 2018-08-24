const express = require('express');
const { Objective } = require('../models');

const router = express.Router();

router.get('/', (req, res) =>{
    console.log('파라미터가 없는 라우터');
    res.render('objectiveEdit', {});
});

router.get('/:id/modify', (req, res) =>{        
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) return res.send('Not Date');
    Objective.findOne({ where : {id}})
                    .then((row) => {
                        if(!row) res.send('Not Date');
                        console.log(row.get());                        
                        return res.render('objectiveEdit', {row : row.get()});
                    })
                    .catch((err) =>{
                        console.error(err);
                        return err;
                    });
});




router.get('/:id', (req, res) =>{    
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) return res.send('Not Date');
    Objective.findOne({ where: {id} })
                    .then((row) =>{
                        if(!row) res.send('Not Date');
                        console.log(row.get());
                        return res.render('objectiveView', {row : row.get() });
                    })
                    .catch((err) => {
                        console.error(err);
                        return err;
                    });
});

router.post('/', (req, res) => {       
    const obj = req.body;    
    Objective.create(obj).then((result) => {
        if(!result){
            throw error;
        }
        const id = result.get().id;        
        res.redirect(`/objective/${id}`);
    }).catch((err) =>{
        console.error(err);
        return err;
    });    
});

module.exports = router;



