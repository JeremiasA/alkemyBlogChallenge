const {param} = require('express-validator')

module.exports = 

[
    param("id")
    .exists({checkFalsy: true})
        .withMessage("id required!")    
    .isNumeric()
        .withMessage("id must be a number!"),

function(req,res,next) {
            next()
        }
    ]
                    