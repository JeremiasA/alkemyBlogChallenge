const repository = require("../repository/posts.repository");
const { validationResult } = require("express-validator");


controller = {
    getPosts: async (req, res) => {
        const result = await repository.getPosts();
        if (result.error) res.status(400).json({ error: result.error });
        else res.status(200).json(result);
        return;
    },

    getPostById: async (req, res) => {
        const result = await repository.getPostById(req.params.id);
        if (result.error) res.status(400).json({ error: result.error });
        else res.status(200).json(result);
        return;
    },

    newPost: async (req, res) => {  
        
        // validation results
        const sendErrors = {}
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            sendErrors.validator =  { errors: errors.array() }
        }
        if(req.categoryError){
            sendErrors.category_error =  req.categoryError 
        }
        if(Object.keys(sendErrors).length>0){
            return res.status(400).json(sendErrors);
        }
        
        
        // call repo
        const result = await repository.newPost(req.body);
        if (result.error) res.status(400).json({ error: result.error });
        else res.status(200).json(result.message);
        return;
    },

    updatePost: async (req, res) => {
        // validations results
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        // call repo
        const result = await repository.updatePost(req.params.id, req.body);
        if (result.error) res.status(400).json({ error: result.error });
        else res.status(200).json(result);
        return;
    },

    deletePost: async (req, res) => {
        const result = await repository.deletePost(req.params.id);
        if (result.error) res.status(400).json({ error: result.error });
        else res.status(200).json(result.message);
        return;
    },
};

module.exports = controller;
