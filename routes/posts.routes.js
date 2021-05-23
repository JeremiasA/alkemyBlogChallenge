const router = require("express").Router();
const controller = require("../controllers/posts.controllers");
const patchValidations = require("../middlewares/patchValidations");
const postValidations = require("../middlewares/postValidations");
const idValidation = require("../middlewares/idValidation");
const { body, param } = require("express-validator");




// Routes
router.get("/", controller.getPosts);

router.get("/:id", idValidation, controller.getPostById);

router.post("/", postValidations, controller.newPost);

router.patch("/:id", patchValidations,controller.updatePost);

router.delete("/:id", controller.deletePost);

module.exports = router;
