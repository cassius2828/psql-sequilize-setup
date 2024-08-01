const sequelize = require("../config/index");
const {
  models: { User },
} = sequelize;
const getUser = async (req, res) => {
    console.log('testing route')
  try {
    const users = await User.create({
      firstName: "Tom",
      lastName: "Thompson",
      email: "Tom.doe@example.com",
    });
    console.log(users.id, ' <-- created user');
    res.status(200).json({message:'hello'});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to retrieve user" });
  }
};
const createDb = async (req, res) => {
  try {
    await sequelize.sync({ force: true }); // This will create the tables defined in your models
    res.status(200).json("Created user table");
  } catch (err) {
    res.status(500).json({ error: "Unable to create user table" });
  }
};

const createArtwork = async (req, res) => {
  try {
    const user = await User.findByPk(2);
    console.log(user);
    const exhibition1 = await Exhibition.create({
      title: `Jane's Art Expo`,
      date: new Date(),
      description: "A showcase of modern art.",
      userId: user.id,
    });
    res.status(200).json(exhibition1);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to create artwork" });
  }
};
module.exports = {
  getUser,
  createDb,
  createArtwork,
};
