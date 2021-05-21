const { Post, Category } = require("../database/connection");



const postsRepo = {
    getPosts: async () => {
        try {
            return await Post.findAll({
                attributes: ["ID", "title", "image", "createdAT"],
                include: { model: Category, attributes: ["name"]},
                order: [['createdAT',  'DESC']]
            });
        } catch (err) {
            return { error: err };
        }
    },

    getPostById: async id => {
        try {
            
            //return query results
            const foundedPost = await Post.findByPk(id, {
                attributes: ["ID", "title", "content", "image", "createdAT"],
                include: { model: Category, attributes: ["name"] },
            });
            
            if(foundedPost) return foundedPost;
            else return {error : "Post ID does not exists!"}

        } catch (error) {
            return { error: err };
        }
    },

    newPost: async data => {
        try {
            await Post.create(data);
            return { message: "Post added to database!." };
        } catch (err) {
            return { error: err };
        }
    },

    updatePost: async (id, data) =>{
        try {
            const foundedPost = await Post.findByPk(id);
            if(foundedPost) {
                const updatedPost = await foundedPost.update(data, {where:{ID : id}});
                return updatedPost;
            }else{
                return {error : "Post ID does not exists!"}
            }
        } catch (err) {
            return { error: err };
        }

    },

    deletePost: async (id) =>{
        try {
            const foundedPost = await Post.findByPk(id);
            if(foundedPost) {
                await foundedPost.destroy();
                return {message: `Post with id: ${id} deleted!`};
            }else{
                return {error : "Post ID does not exists!"}
            }
        } catch (error) {
            return { error: err };
        }
    }
};

module.exports = postsRepo;
