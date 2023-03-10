const express = require("express"); 
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const orders = require("./routes/orders");
const login = require("./routes/login");
const stripe = require("./routes/stripe");
const productsRoute = require("./routes/products");

const products = require("./products");
const app = express();
app.use(cors());

require("dotenv").config()

app.use(express.json());

//app.use((req, res,) => {
//  console.log("Adding Access-Control-Allow-Origin header");
//  res.setHeader("Access-Control-Allow-Origin", "*");
//});


app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/stripe", stripe);
app.use("api/products", productsRoute);


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
  .connect((uri), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));


