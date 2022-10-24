'use strict';

const { portfolioModel } = require('./schema.js');
const router = require('express').Router();

// CREATE
router.post('/addInvestment', (req,res,next) => {
    console.log(req.body);
    portfolioModel.create(req.body)
    .then(results => res.status(201).send(results))
    .catch(err => next(err))
});

// READ
router.get('/getAll', (req,res,next) => portfolioModel.find()
.then(results => res.send(results))
.catch(err => next(err))
);

//UPDATE
// router.post('/addInvestment', (req,res,next) => {
//     portfolioModel.create(req.body)
//     .then(results => res.status(201).send(results))
//     .catch(err => next(err))
// });

// //DELETE
// router.delete('/delete/:id', (req, res, next) => {
//     const id = req.params.id;
//     portfolioModel.findByIdAndDelete(id)
//     .then(results => res.status(201).send(results))
//     .catch(err => next(err))
// })


module.exports = router;