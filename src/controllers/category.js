const Category = require('../models/category');


exports.getAllCategories = async (req, res, next) => {
     try {
         const categories = await Category.find();
         res.json(categories)
     } catch (e) {
         next(e);
     }

    const result = await Category.find
}

