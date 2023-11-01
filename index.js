const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here

// async function initializeBand(){
//     const testBand = await Band.create({
//         name: "Arctic Monkeys",
//         genre: "Indie Rock"
//     })
    
//     console.log(testBand)
// }

// initializeBand()

module.exports = {
    Band,
    Musician,
    Song
};
