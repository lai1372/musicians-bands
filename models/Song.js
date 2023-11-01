const { Sequelize, sequelize, Model, DataTypes } = require("../db");

// TODO - define the Song model
class Song extends Model {}

Song.init({
  title: DataTypes.STRING,
  year: DataTypes.INTEGER,
  length: DataTypes.INTEGER,
}, {
    sequelize: sequelize,
    modelName: "song"
});

// let Song = await Song.create({
//     title: "505",
//     year: 2007,
//     length: 3.33
// })

module.exports = {
  Song,
};
