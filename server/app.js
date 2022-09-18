const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/jobs-routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/jobs", router); // localhost:5000/jobs

mongoose
  .connect(
    "mongodb+srv://larry6683:19992000@cluster0.t7e8udf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
