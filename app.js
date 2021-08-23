const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

/*const allowedOrigins = ["http://localhost"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed"));
    }
  },
};*/

//app.options("*", cors(corsOptions));

app.use(bodyParser.json());
app.use(cors());

const postsRoute = require("./routes/richieste");
const usersRoute = require("./routes/login");

app.use("/richieste", postsRoute);
app.use("/login", usersRoute);

mongoose.connect(process.env.DBCONNECTION, () => {
  console.log("Connected!");
});

app.listen(process.env.PORT || 3000);
