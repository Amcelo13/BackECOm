const express = require("express");
const cors = require("cors");
const signupRoot = require("./routes/signupRouter");
const productRoot  =  require("./routes/productRouter");
const mongoose = require("mongoose");
const port = 4000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to backend!!");
});

app.use("/", signupRoot);
app.use('/', productRoot)

try {
  mongoose.connect(
    "mongodb+srv://chetelise:123123123@ecommerce.6xlkuyn.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Connected to MongoDB");
} 
catch (err) {
  console.log(err);
}


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
