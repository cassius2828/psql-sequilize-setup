const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const sequelize = require("./config/index");
const app = express();




const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully to tutorial.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectToDB();

const userRouter = require("./routes/user");

app.use("/user", userRouter);

const port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
