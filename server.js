// imports
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import build from "./Schemas.js";
import config from "./config.js";
import { value, streaming } from "./builds.js";

// connections
const app = express();
const PORT = 4000;
mongoose.connect(config.buildsDBurl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
const db = mongoose.connection;

// middlewares
app.use(cors());
app.use(bodyParser.json());
db.once("open", () => {
  console.log("Connection established with Database");
});

// routes
app.post("/estimateServer", (req, res) => {
  res.status(200).send("Data recieved");
  const newBuild = {
    budget: req.body.budget,
    games: req.body.games,
    extras: req.body.extras,
  };
  console.log(newBuild);
});

// Logic
function check_and_update(mongoose_doc, build_id) {
  var query = { id: build_id };
  build.findOneAndUpdate(query, mongoose_doc, { upsert: true }, function (err) {
    if (err) return console.log("error: " + err);
    return console.log("Succesfully saved.");
  });
}

const builds_array = [value, streaming];
builds_array.map((build) => check_and_update(build, build.build_id));

// listener
app.listen(PORT, () => {
  console.log("----------------------------------");
  console.log("Server running on Port: " + PORT);
  console.log("----------------------------------");
});
