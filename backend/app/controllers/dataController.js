const All_Products = require('../models/productsSchema');
const Home_Categories = require('../models/categorySchema');

exports.getCategories = async (req, res) => {
    try {
        const homeCategories = await Home_Categories.find({});
        res.json(homeCategories);
    }
    catch (error) {
        res.status(500).send(error);
    }
}


exports.getProducts = async (req, res) => {
    try {
        const { category } = req.params;
        if (category) {
            if (category === "AllProducts") {
                const allProducts = await All_Products.find();
                res.json(allProducts);
            }
            else {
                const filter = { category: category };
                filter.category = category;
                const products = await All_Products.find(filter);
                res.json(products);
            }
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}