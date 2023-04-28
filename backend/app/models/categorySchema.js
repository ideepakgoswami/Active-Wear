const mongoose = require('mongoose');
const { DATA_DB } = require('../config/dbConnect');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        requires: true,
    },
    description: {
        type: String,
        requires: true,
    },
    image: {
        type: String,
        requires: true,
    },
    category: {
        type: String,
        requires: true
    }
})

const Home_Categories = DATA_DB.model('Home_Categories', categorySchema)
module.exports = Home_Categories