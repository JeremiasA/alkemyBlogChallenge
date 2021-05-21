
const { Category } = require("../database/connection");

const categories_options = {  
    1: "Frenos",
    2: "Suspensión",
    3: "Electricidad",
    4: "Interiores",
    5: "Motor",
    6: "General",
    7: "Calefacción",
};

const validate = {

    category: async (req, res, next) => {
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
