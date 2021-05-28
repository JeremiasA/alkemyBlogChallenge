const repository = require("../repository/posts.repository");
const { validationResult } = require("express-validator");


controller = {
    getPosts: async (req, res) => {
      try {
          const result = await repository.getPosts();
          if (result) return res.status(200).json(result); 
          
        } catch (err) {
            return res.status(500).json({ error : err });
        }
    },

    getPostById: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        try {
            const result = await repository.getPostById(req.params.id);
            if (result) return res.status(200).json(result);
            else  return res.status(404).json({message : "Post not found."})
        } catch (err) {
           return res.status(500).json({ error : err });
        }
    },

    newPost: async (req, res) => {  
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        try {
            const result = await repository.newPost(req.body);
            if (result) return res.status(200).json({message : "Post added to database OK!"});
            
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    updatePost: async (req, res) => {
        // validations results
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        // call repo
        try {
            const result = await repository.updatePost(req.params.id, req.body);
            if (result==1) return res.status(200).json({message : "Post modified OK!"});
            else return res.status(404).json({ message: "Post not found!" }); 
        } catch (err) {
           return res.status(500).json({ error: err });
        }
    },

    deletePost: async (req, res) => {
        try {
            const result = await repository.deletePost(req.params.id);
            console.log(result);
            if (result) return res.status(200).json({message : `Post with id = ${req.params.id} deleted!`});
            else return res.status(404).json({ message : "Post not found!" }); 
            
        } catch (err) {
           return res.status(500).json({ error : err }) 
        }
    },
};

module.exports = controller;
