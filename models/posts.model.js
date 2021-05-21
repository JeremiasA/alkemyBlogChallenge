const { DataTypes } = require("sequelize");

module.exports = sequelize => {
    return sequelize.define(
        "Post",
        {
            ID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
            },
            title: {
                type: DataTypes.STRING(),
                allowNull: false,
                validate: {
                    notNull:{
                        args : true,
                        msg: "Image url/path can't be null."
                    },
                    notEmpty:{
                        args : true, 
                        msg : "Image url/path can't be empty."
                    },
                },
            },
            content: {
                type: DataTypes.STRING(),
                allowNull: false,
                validate: {
                    notNull:{
                        args : true,
                        msg: "Image url/path can't be null."
                    },
                    notEmpty:{
                        args : true, 
                        msg : "Image url/path can't be empty."
                    },
                },
                
            },
            image: {
                type: DataTypes.STRING(),
                allowNull:false,
                validate: {
                    is: {
                      args:  /.png{1}$|.jpg{1}$/i,
                      msg: "Invalid image format."
                    },
                    notNull:{
                        args : true,
                        msg: "Image url/path can't be null."
                    },
                    notEmpty:{
                        args : true, 
                        msg : "Image url/path can't be empty."
                    },
                },
            },
        },
        {
            timestamps: true,
        }
    );
};
