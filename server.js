const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());


const uri = "mongodb+srv://admin:capstone@avscluster.ez6zewr.mongodb.net/AVSproject";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is connected on port ${port}`);
});
