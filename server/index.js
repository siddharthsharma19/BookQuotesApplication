const cors = require("cors");
const express = require("express");
const passport = require("passport");
const routes = require("./routes/routes");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());

connectDB();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(routes);
app.use(passport.initialize());


require("./config/passport")(passport);

app.listen(PORT, console.log(`Server running in ${PORT}`));