
const { Category } = require("../database/connection");
    
    const validate = {
        
        category: async (req, res, next) => {
            const categories_options = await Category.findAll({attributes:["id", "name"]}) 
            const categories = await Category.findOne({
                where: { id: req.body.CategoryId },
            });
            if (!categories) {
                req.categoryError = {};
                req.categoryError = {
                    "Invalid category ID": `Select from:`,
                    categories_options,
                };
            }
            next();
            return;
    }
    
};
module.exports = validate;
