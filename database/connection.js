const { Sequelize } = require("sequelize"),
    postModel = require("../models/posts.model"),
    categoryModel = require("../models/categories.model");

    
// config connection
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASS,
    {
        host   : process.env.HOST,
        dialect: "mysql"
    }
);

// obtain models
const Post = postModel(sequelize);
const Category = categoryModel(sequelize);

// relations
Category.hasMany(Post);
Post.belongsTo(Category);

// sync models
(async () =>{
    let err = null;
    await sequelize.sync({force:false}).catch(error => {err = error})
    if(err) console.log('Unable to synchronize database:', err)    
    else{
         console.log('database synchronization Ok!');
    //populate
    // require('../populate') 
    }
})();



module.exports = {Post, Category};