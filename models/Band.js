const {Sequelize, sequelize, Model, DataTypes} = require('../db');

// TODO - define the Band model
class Band extends Model {}

Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING
})

let Band;

module.exports = {
    Band
};