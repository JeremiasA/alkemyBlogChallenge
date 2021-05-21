const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
   return sequelize.define('Category',{

    name: DataTypes.STRING,
},{
    timestamps: false

});
};