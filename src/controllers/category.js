const Category = require('../models/category');
const Response = require('../helpers/response')



module.exports.createCategory = async (req, res, next) => {
    try {
        var name = req.body.name;
        var category = await Category.create({ name });

        Response.success({
            res,
            code: 201,
            data: {
                category
            }
        })
    } catch (e) {
        next(e);
    }
}

module.exports.getAllCategories = async (req, res, next) => {
     try {
         const categories = await Category.find();

         Response.success({
            res,
            data: {
                categories
            }
        })
     } catch (e) {
         next(e);
     }

    const result = await Category.find
}

