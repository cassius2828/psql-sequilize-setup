// populateData.js
const dotenv = require("dotenv");
dotenv.config();
const sequelize = require("./config/index");

const populateData = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully to tutorial.");
    await sequelize.sync({ force: true });
    console.log("Database synced.");

    // Create Users
    const user1 = await sequelize.models.User.create({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    });
    const user2 = await sequelize.models.User.create({
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
    });
    console.log("Users created:", user1.id, user2.id);

    // Create Exhibitions
    const exhibition1 = await sequelize.models.Exhibition.create({
      title: "Modern Art Expo",
      date: new Date(),
      description: "A showcase of modern art.",
      userId: user1.id,
    });
    const exhibition2 = await sequelize.models.Exhibition.create({
      title: "Classic Art Exhibit",
      date: new Date(),
      description: "A collection of classic artworks.",
      userId: user2.id,
    });
    console.log("Exhibitions created:", exhibition1.id, exhibition2.id);

    // Create Artworks
    const artwork1 = await sequelize.models.Artwork.create({
      title: "Starry Night",
      artist: "Vincent van Gogh",
      year: 1889,
    });
    const artwork2 = await sequelize.models.Artwork.create({
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      year: 1503,
    });
    const artwork3 = await sequelize.models.Artwork.create({
      title: "The Persistence of Memory",
      artist: "Salvador Dalí",
      year: 1931,
    });
    console.log("Artworks created:", artwork1.id, artwork2.id, artwork3.id);

    // Associate Artworks with Exhibitions
    await exhibition1.addArtwork(artwork1);
    await exhibition1.addArtworks(artwork3);
    await exhibition2.addArtworks(artwork2);
    console.log("Artworks associated with exhibitions.");

    console.log("Data has been populated successfully!");
  } catch (error) {
    console.error("Error populating data:", error);
  } finally {
    await sequelize.close();
  }
};

populateData();
