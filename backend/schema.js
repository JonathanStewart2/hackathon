'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/portfolio_db',
    { useNewUrlParser: true });

const portfolioHoldingsSchema = new Schema({
    symbol: {
        type: String,
        require: true,
         minlength: 2
     },
    name: {
        type: String,
        require: true,
        minlength: 2
    },
    investment: {
        type: Number,
        require: true
    },
    transactions: [{
        PPC: {
            type: Number,
            require: true
        },
        Purchased: {
            type: Number,
            require: true
        },
        Date: {
            type: Date,
            require: true
        }]

    }
});

const portfolioModel = mongoose.model("portfolio", portfolioSchema);

module.export = portfolioModel