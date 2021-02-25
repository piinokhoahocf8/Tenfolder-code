const Product = require('../models/product');

exports.getAllProducts = async (req, res, next) => {
    try {
        console.log(req.query);
        const products = await Product.find(req.query).populate('category');
        res.json(products)
    } catch (e) {
        next(e);
    }
}

exports.getOneProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).populate('category');
        res.json(product)
    } catch (e) {
        next(e);
    }
}

exports.getProducts = async (req, res, next) => {
    try {
        const category = req.params.id;
        const products = await Product.find({ category }).populate('category');
        res.json(products)
    } catch (e) {
        next(e);
    }
}