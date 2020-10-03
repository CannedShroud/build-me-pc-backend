// imports
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

// declarations
const app = express();
const PORT = 4000;

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World! the server is alive!!!")
})

// listener
app.listen(PORT, () => {
  console.log("----------------------------------");
  console.log("Server running on Port: " + PORT);
  console.log("----------------------------------");
});
