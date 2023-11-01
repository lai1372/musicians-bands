const { Sequelize, sequelize, Model, DataTypes } = require("../db");

// TODO - define the Band model
class Band extends Model {}

Band.init(
  {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
  },
  {
    sequelize: sequelize,
    modelName: "band",
  }
);

module.exports = {
  Band,
};
