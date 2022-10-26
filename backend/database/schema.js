'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/portfolio_db',
    { useNewUrlParser: true });


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
    crypto: {
        type: Number,
        require: true
    }
});

const portfolioModel = mongoose.model("portfolio", portfolioSchema);

module.exports = {
    portfolioModel,
};