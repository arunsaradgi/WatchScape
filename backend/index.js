const express = require("express");
require("dotenv").config();
const { connection } = require("./db");
const { userRouter } = require("./routes/users.routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`server is on ${process.env.port}`);
  } catch (error) {
    console.log(error.message);
  }
});
