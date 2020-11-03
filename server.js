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
  useFindAndModify: false,
});
const db = mongoose.connection;

// middlewares
app.use(cors());
app.use(bodyParser.json());
db.once("open", () => {
  console.log("Connection established with Database");
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

// routes
app.post("/estimateServer", (req, res) => {
  res.status(200).send("Data recieved");
  const newBuild = {
    budget: req.body.budget,
    games: req.body.games,
    extras: req.body.extras,
  };
});

app.get("/builds_list", (req, res) => {
  build.find({}, function (err, builds) {
    var buildMap = {};

    builds.forEach((build) => {
      buildMap[build._id] = build;
    });
    res.send(buildMap);
  });
});

app.get("/build_details", async (req, res) => {
  let details = await build.find({ build_id: req.query.build_id }).exec();
  details = details[0];
  delete details["__v"];
  delete details["_id"];
  res.status(200).send(details);
});

// listener
app.listen(PORT, () => {
  console.log("----------------------------------");
  console.log("Server running on Port: " + PORT);
  console.log("----------------------------------");
});
