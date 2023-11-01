const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    const testBand = await Band.create({
      name: "Arctic Monkeys",
      genre: "Indie Rock",
    });
    expect(testBand.name).toBe("Arctic Monkeys");
    expect(testBand.genre).toBe("Indie Rock");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const testMusician = await Musician.create({
      name: "Shabaka Hutchings",
      instrument: "Saxaphone",
    });
    expect(testMusician.name).toBe("Shabaka Hutchings");
    expect(testMusician.instrument).toBe("Saxaphone");
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    const testBand = await Band.create({
      name: "Arctic Monkeys",
      genre: "Indie Rock",
    });
    const updateBand = await testBand.update({
      genre: "Rock",
    });

    expect(testBand.genre).toBe("Rock");
  });

  test("can update a Musician", async () => {
    // TODO - test updating a musician
    const testMusician = await Musician.create({
        name: "Shabaka Hutchings",
        instrument: "Saxaphone",
      });
    const updatedMusician = testMusician.update({
        instrument: "Sax"
    })

    expect(testMusician.instrument).toBe("Sax");
  });

  test("can delete a Band", async () => {
    // TODO - test deleting a band
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });

  test("can delete a Musician", async () => {
    // TODO - test deleting a musician
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });
});
