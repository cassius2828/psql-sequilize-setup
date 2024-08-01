const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const sequelize  = require("./config/index");
const app = express();

// env vars
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const dialect = process.env.DIALECT;

///////////////////////////
// Connect to DB
///////////////////////////
// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
//   host: "localhost",
//   dialect /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
// });

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
