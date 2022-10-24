'use strict';

const { portfolioModel } = require('./schema.js');
const router = require("express").Router();

// CREATE -----------------------------------------
router.post('/addInvestment', (req, res, next) => {
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
    const id = req.params.id;
    console.log(id);
    portfolioModel.find({ id })
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

// API PROXY FETCH
router.get("/api/search", async (req, res) => {
    //const query = `q=${req.query.q}`;
    try {
        const res = await axios.get('https://pro-api.coinmarketcap.com/cryptocurrency/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_API_KEY}`,
            }
        })
        console.log(res);
        //setCrypto(res.data.Search);
    } catch (err) {
        console.error('Error');
    }
})

// It uses node-fetch to call the goodreads api, and reads the key from .env
// 	const res = await fetch(`https://www.goodreads.com/search/index.xml?key=${process.env.GOODREADS_API_KEY}&${searchString}`);
// 	const xml = await response.text();
// 	const results = JSON.parse(json).GoodreadsResponse.search.results;
// 	return res.json({
//         success: true,
//         results
//     })
// } catch (err) {
// 	return res.status(500).json({
// 		success: false,
// 		message: err.message,
// 	})
// }



module.exports = router;