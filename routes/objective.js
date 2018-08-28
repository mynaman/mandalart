const express = require('express');
const { Objective } = require('../models');
const objective = require('../util/objective');

const router = express.Router();


router.get('/', (req, res) =>{
    console.log('파라미터가 없는 라우터');
    res.render('objectiveEdit', {});
});

router.get('/:id', (req, res) =>{    
    const obj_id = req.params.id;
    if(obj_id) {
        Objective.findOne({ where: {obj_id} })
                        .then((row) =>{
                            if(!row) res.send('Not row!');
                            console.log(row.get());
                            return res.render('objectiveView', {row : row.get() });
                        })
                        .catch((err) => {
                            console.error(err);
                            return err;
                        });
    } else {
        return res.send('not date!');        
    }
});

router.get('/:id/modify', (req, res) =>{    
    const obj_id = req.params.id;
    if(obj_id) {
        Objective.findOne({ where: {obj_id} })
                        .then((row) =>{
                            if(!row) res.send('Not row!');
                            console.log(row.get());
                            return res.render('objectiveModify', {row : row.get() });
                        })
                        .catch((err) => {
                            console.error(err);
                            return err;
                        }); 
    } else {
        return res.send('not date!');        
    }
});


router.post('/', (req, res) => {
    const obj = objective.create(req);
    Objective.create(obj).then((result) =>{
        if(!result) throw error
        const id = result.obj_id;
        return res.redirect(`/objective/${id}`);
    }).catch((err) => {
        console.error(err);
        return err;
    });
});

router.post('/:id', (req, res) => {
    const obj = objective.modify(req);
    const obj_id = req.params.id
    Objective.update(obj, {where : {obj_id: obj_id }}).then((result) =>{        
        if(!result) throw error        
        return res.redirect(`/objective/${obj_id}`);
    }).catch((err) => {
        console.error(err);
        return err;
    });
});

module.exports = router;



