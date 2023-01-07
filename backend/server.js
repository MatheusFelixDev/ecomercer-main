const express = require("express"); 
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");

const products = require("./products");

const app = express();

require("dotenv").config()

app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://ecomercer-main-front.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/register", register);
app.use("/login", login);


app.get("/", (req, res) => {
    res.send("Welcome to our online shop API..."); 
});

app.get("/products", (req, res) => {
    res.send(products); 
});

const uri = process.env.DB_URI
const port = process.env.PORT || 5000


app.listen(port, console.log(`Server running on port ${port}`));

mongoose.set("strictQuery", true);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));