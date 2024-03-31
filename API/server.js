const express = require("express");
const cors = require("cors");
const Server = express();
const Mongoose = require("mongoose");
const dotenv = require("dotenv");
const AuthRoute = require("./Routes/auth");
const UserRoute = require("./Routes/users");
const SheetRoute = require("./Routes/sheets");

dotenv.config();

Mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

Server.use(cors());
Server.use(express.json());
Server.use("/api/auth", AuthRoute);
Server.use("/api/users", UserRoute);
Server.use("/api/sheets", SheetRoute);

Server.listen(3000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
