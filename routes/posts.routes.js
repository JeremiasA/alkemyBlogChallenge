const router = require("express").Router();
const controller = require("../controllers/posts.controllers");
const validate = require("../middlewares/patchValidations");
const { body } = require("express-validator");

const categories_options = [
    " 1 : Frenos",
    " 2 : Suspensión",
    " 3 : Electricidad",
    " 4 : Interiores",
    " 5 : Motor",
    " 6 : General",
    " 7 : Calefacción",
];

// Routes
router.get("/posts/", controller.getPosts);

router.get("/posts/:id", controller.getPostById);

router.post(
    "/posts",
    validate.category,
    body("title")
        .not().isEmpty()
        .withMessage("Title can't be empty"),
    body("content").not().isEmpty().withMessage("Content can't be empty"),
    // body("CategoryId")
    //     .isInt({ gt: 0, lt: categories_options.length + 1 }) //between categories ids
    //     .withMessage(`Select an id from: ${categories_options}`),
    body("image")
        .matches(/\.png{1}$|\.jpg{1}$/i)
        .withMessage("Image src must end with .jpg or .png"),

    controller.newPost
);

router.patch(
    "/posts/:id",
    body("title")
        .optional()
        .not().isEmpty()
            .withMessage("Title can't be empty"),
    body("content")
        .optional()
        .not().isEmpty().
            withMessage("Content can't be empty"),
    body("CategoryId")
        .optional()
        .isInt({ gt: 0, lt: categories_options.length + 1 }) //between categories ids
            .withMessage(`Select an id from: ${categories_options}`),
    body("image")
        .optional()
        .matches(/\.png{1}$|\.jpg{1}$/i)
            .withMessage("Image src must end with .jpg or .png"),
    controller.updatePost
);

router.delete("/posts/:id", controller.deletePost);

module.exports = router;
