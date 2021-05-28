
const { Category } = require("../database/connection");
const { body } = require("express-validator");
  
  
module.exports = 

[
   
 body("title")
    .optional()
    .not().isEmpty()
    .withMessage("Title can't be empty"),
body("content")
    .optional()
    .not().isEmpty()
    .withMessage("Content can't be empty"),
    
body("CategoryId")
    .optional()
    .not().isEmpty()
    .isNumeric()
    .custom((value, {req}) => {
        return Category.findOne({where : {id:value}}).then(category => {
            if (!category) {
            return Promise.reject('Invalid category id');
            }
        });
        }),

body("image")
    .optional()
    .matches(/\.png{1}$|\.jpg{1}$/i)
    .withMessage("Image src must end with .jpg or .png"),
        
function(req,res,next) {
            next()
        }
    ]
        
  


