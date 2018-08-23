const express = require('express');
const { Objective } = require('../models');

const router = express.Router();

// router.get('/', (req, res) =>{
//     console.log('파라미터가 없는 라우터');
//     // res.render('objective', { name : 'jsman', age : 35, add : '인천'});
// });


router.get('/:id', (req, res) =>{
    const id = req.params.id;
    if(Number.isNaN(parseInt(id),10)) res.render('test', {});    
    Objective.find({ where: {id} })
                    .then((result) =>{
                        if(!result) res.send('NOT DATE')
                        console.log(result);
                        return res.send(JSON.stringify(result));
                    })
                    .catch((err) => {
                        console.error(err);
                        return err;
                    });
});

router.post('/', (req, res) => {

    console.log(req.body);
    console.log(JSON.stringify(req.body));

    var obj = req.body;
    var result = Object.keys(obj).map(function(key) {
        return [ key , obj[key]];
      });
    console.log('결과');
    console.log(result);

    Objective.bulkCreate(data).then((result) => {
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

// router.post('/', (req, res) => {
       
//     var count =  Object.keys(req.body).length;
//     console.log(count);
//     Objective.create({
//         obj1_1 : req.body.obj1_1,
//         obj1_2 : req.body.obj1_2,
//         obj1_3 : req.body.obj1_3,
//         obj1_4 : req.body.obj1_4,
//         obj1_5 : req.body.obj1_5,
//         obj1_6 : req.body.obj1_6,
//         obj1_7 : req.body.obj1_7,
//         obj1_8 : req.body.obj1_8,        
//         obj1_subject : req.body.obj1_subject,
//     }).then((result) => {
//         if(!result){
//             throw error;
//         }
//         const id = result.get().id;        
//         res.redirect(`/objective/${id}`);
//     }).catch((err) =>{
//         console.error(err);
//         return err;
//     });    
// });


module.exports = router;



