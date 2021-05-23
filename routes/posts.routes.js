const router = require("express").Router();
const controller = require("../controllers/posts.controllers");
const patchValidations = require("../middlewares/patchValidations");
const postValidations = require("../middlewares/postValidations");
const idValidation = require("../middlewares/idValidation");
const { body, param } = require("express-validator");




// Routes
router.get("/posts/", controller.getPosts);

router.get("/posts/:id", idValidation, controller.getPostById);

router.post("/posts", postValidations, controller.newPost);

router.patch("/posts/:id", patchValidations,controller.updatePost);

router.delete("/posts/:id", controller.deletePost);

module.exports = router;
