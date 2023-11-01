const { Sequelize, sequelize, Model, DataTypes } = require("../db");

// TODO - define the Song model
class Song extends Model {}

Song.init({
  title: DataTypes.STRING,
  year: DataTypes.INTEGER,
  length: DataTypes.INTEGER,
});

let Song;

module.exports = {
  Song,
};
