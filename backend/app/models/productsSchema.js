const mongoose = require('mongoose');
const { DATA_DB } = require('../config/dbConnect');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        requires: true,
    },
    price: {
        type: Number,
        requires: true,
    },
    oldPrice: {
        type: Number,
        requires: true,
    },
    image: {
        type: String,
        requires: true,
    },
    description: {
        type: String,
        requires: true,
    },
    category: {
        type: String,
        requires: true,
    }
})

const All_Products = DATA_DB.model('All_Products', productSchema)
module.exports = All_Products;