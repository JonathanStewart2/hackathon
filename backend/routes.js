'use strict';

const { portfolioModel } = require('./schema.js');
const router = require("express").Router();
const axios = require("axios");
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');


// AUTHENTICATION
// router.post('/signup', (req, res, next) => {
//     console.log(req.body);
//     res.render('login');
//   });






// CREATE -----------------------------------------
router.post('/addCrypto', (req, res, next) => {
    portfolioModel.create(req.body)
        .then(results => res.status(201).send(results))
        .catch(err => next(err))
});

// READ -----------------------------------------
router.get('/getPortfolio', (req, res, next) => {
    console.log(req);
    portfolioModel.find()
        .then(results => res.send(results))
        .catch(err => next(err))
});

router.get('/getPortfolio/:id', (req, res, next) => {
    const _id = req.params.id;
    console.log(_id);
    portfolioModel.find({_id})
        .then(results => res.send(results))
        .catch(err => next(err))
})

// UPDATE -----------------------------------------
router.patch("/updatePortfolio/:id", async (req, res, next) => {
    try {
        await portfolioModel.findByIdAndUpdate(req.params.id, req.body)
        const newModel = await portfolioModel.findById(req.params.id);
        console.log(newModel);
        res.send(newModel);
    } catch (err) {
        return next(err);
    }
})

// DELETE -----------------------------------------
router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    portfolioModel.findByIdAndDelete(id)
        .then(results => res.status(201).send(results))
        .catch(err => next(err))
})


//API PROXY GETS ----------

// API FOR 16 CRYPTOS
router.get("/api/search", async (req, res, next) => {
        // SANDBOX
        await axios.get("https://rest-sandbox.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;SOL;USDT;XRP;BNB;MATIC;LRC;DOT;DOGE;LTC;LINK;IMX;SNX,GRT;AVAX", 
        { headers: {"X-CoinAPI-Key": `${process.env.API_KEY}`}
    })
        
        // PRODUCTION
    //     await axios.get("https://rest.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;SOL;USDT;XRP;BNB;MATIC;LRC;DOT;DOGE;LTC;LINK;IMX;SNX,GRT;AVAX", 
    //     { headers: {"X-CoinAPI-Key": `${process.env.API_KEY}`}
    // })

        .then(results => res.status(201).send(JSON.stringify(results.data)))
        .catch(err => console.log(err))
})

// API FOR CRYPTO NEWS  NEWSDATA.IO
router.get("/news", async (req,res,next) => {
    await axios.get("", 
        { headers: {"X-CoinAPI-Key": `${process.env.API_KEY}`}
    })
})



module.exports = router;