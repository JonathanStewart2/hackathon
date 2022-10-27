'use strict';

const { PortfolioModel, UserModel } = require('./database/schema.js');
const router = require("express").Router();
const axios = require("axios");
require('dotenv').config();
const passport = require('./auth.js')
const createError = require('http-errors');


// AUTHENTICATION
const isAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()){
        return next(createError).Unauthorized('Login failed');
    }
    return next();
}

router.get('/getUsers', isAuthenticated, (req, res, next) => {
    UserModel.find((err,user) => {
        if (err) {
            return next(err);
        }
        return res.json(users);
    })
})

router.post('/register', async ({body}, res, next) => {
    const newUser = new UserModel(body);
    await newUser.save((err) => {
        if (err) {
            return next(err);
        }
        return res.redirect('login.html');
    });
})

router.post('./login', passport.authenticate('local'), (req,res) => {
    res.redirect('getUsers');
})

// router.post('/signup', (req, res, next) => {
//     console.log(req.body); 
//   });

// router.post('/login', (req, res, next) => {
//     console.log(req.body); 
//   });



// CREATE -----------------------------------------
router.post('/addCrypto', (req, res, next) => {
    PortfolioModel.create(req.body)
        .then(results => res.status(201).send(results))
        .catch(err => next(err))
});

// READ -----------------------------------------
router.get('/getPortfolio', (req, res, next) => {
    console.log(req);
    PortfolioModel.find()
        .then(results => res.send(results))
        .catch(err => next(err))
});

router.get('/getPortfolio/:id', (req, res, next) => {
    const _id = req.params.id;
    console.log(_id);
    PortfolioModel.find({_id})
        .then(results => res.send(results))
        .catch(err => next(err))
})

// UPDATE -----------------------------------------
router.patch("/updatePortfolio/:id", async (req, res, next) => {
    try {
        await PortfolioModel.findByIdAndUpdate(req.params.id, req.body)
        const newModel = await PortfolioModel.findById(req.params.id);
        console.log(newModel);
        res.send(newModel);
    } catch (err) {
        return next(err);
    }
})

// DELETE -----------------------------------------
router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    PortfolioModel.findByIdAndDelete(id)
        .then(results => res.status(201).send(results))
        .catch(err => next(err))
})


//API PROXY GETS ----------

// API FOR 16 CRYPTOS
router.get("/api/search", async (req, res, next) => {
        // SANDBOX
        await axios.get("https://rest-sandbox.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;SOL;USDT;XRP;BNB;MATIC;LRC;DOT;DOGE;LTC;LINK;IMX;SNX,GRT;AVAX", 
        { headers: {"X-CoinAPI-Key": `${process.env.COIN_API_KEY}`}
    })
        
        // PRODUCTION
    //     await axios.get("https://rest.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;SOL;USDT;XRP;BNB;MATIC;LRC;DOT;DOGE;LTC;LINK;IMX;SNX,GRT;AVAX", 
    //     { headers: {"X-CoinAPI-Key": `${process.env.COIN_API_KEY}`}
    // })

        .then(results => res.status(201).send(JSON.stringify(results.data)))
        .catch(err => console.log(err))
})

// API FOR CRYPTO NEWS  NEWSDATA.IO
router.get("/news", async (req,res,next) => {
    await axios.get("", 
        { headers: {"X-CoinAPI-Key": `${process.env.NEWS_API_KEY}`}
    })
})



module.exports = router;