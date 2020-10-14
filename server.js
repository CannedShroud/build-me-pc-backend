// imports
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// connections
const app = express();
const PORT = 4000;

// middlewares
app.use(cors());
app.use(bodyParser.json());

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

// listener
app.listen(PORT, () => {
  console.log("----------------------------------");
  console.log("Server running on Port: " + PORT);
  console.log("----------------------------------");
});
