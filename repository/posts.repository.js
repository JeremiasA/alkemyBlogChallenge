const { Post, Category } = require("../database/connection");



const postsRepo = {
    getPosts: async () => {
        return await Post.findAll({
            attributes: ["ID", "title", "image", "createdAT"],
            include: { model: Category, attributes: ["name"]},
            order: [['createdAT',  'DESC']]
        });
    },

    getPostById: async id => {
        return await Post.findByPk(id, {
            attributes: ["ID", "title", "content", "image", "createdAT"],
            include: { model: Category, attributes: ["name"] },
        });
    },

    newPost: async data => {
        return await Post.create(data);
    },

    updatePost: async (id, data) =>{
        return await Post.update(data, {where:{ID : id}});
    },

    deletePost: async (id) =>{
        return await Post.destroy({where: {ID : id}});
    }
};

module.exports = postsRepo;
