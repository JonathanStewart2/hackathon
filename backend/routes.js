'use strict';

const { portfolioModel } = require('./schema.js');
const router = require("express").Router();

// CREATE -----------------------------------------
router.post('/addInvestment', (req,res,next) => { 
    portfolioModel.create(req.body)
    .then(results => res.status(201).send(results))
    .catch(err => next(err))
});

// READ -----------------------------------------
router.get('/getPortfolio', (req,res,next) => {
    console.log(req);
    portfolioModel.find()
    .then(results => res.send(results))
    .catch(err => next(err))
});

router.get('/getPortfolio/:id', (req,res,next) => {
    const id = req.params.id;
    console.log(id);
    portfolioModel.find({id})
    .then(results => res.send(results))
    .catch(err => next(err))
})

//UPDATE -----------------------------------------
router.patch("/updatePortfolio/:id", async (req,res,next) => {
    try {
        await portfolioModel.findByIdAndUpdate(req.params.id, req.body)
        const newModel = await portfolioModel.findById(req.params.id);
        console.log(newModel);
        res.send(newModel);
    } catch(err) {
        return next(err);
    }
})

// //DELETE
router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    portfolioModel.findByIdAndDelete(id)
    .then(results => res.status(201).send(results))
    .catch(err => next(err))
})


module.exports = router;