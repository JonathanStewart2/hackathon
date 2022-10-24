'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/portfolio_db',
    { useNewUrlParser: true });

    const transactionSchema = new Schema ({
        _id: {
            type: Number,
            require: true
        },
        symbol: {
            type: String,
            require: true
        },
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
        }
    })

const portfolioSchema = new Schema({
    _id: {
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
    transactions: [ transactionSchema ]
});



const portfolioModel = mongoose.model("portfolio", portfolioSchema);
const transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = { 
    portfolioModel,
    transactionModel
 };