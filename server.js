// imports
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

// connections
const app = express();
const PORT = 4000;
mongoose.connect(
  "mongodb+srv://admin:mixedfruit@cluster0.e9wwo.mongodb.net/pc-spec-db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
const connection = mongoose.connection;

// middlewares
app.use(cors());
app.use(bodyParser.json());
connection.once("open", () => {
  console.log("----------------------------------");
  console.log("Connection established with DataBase");
  console.log("----------------------------------");
});

// routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World! the server is alive!!!");
});

// listener
app.listen(PORT, () => {
  console.log("----------------------------------");
  console.log("Server running on Port: " + PORT);
  console.log("----------------------------------");
});
