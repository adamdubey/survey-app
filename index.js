const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");

// NOTE: The order of these matters; DO NOT CHANGE!!!
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// route handlers
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

// production routing
if (process.env.NODE_ENV === "production") {
  // ensure express serves prod assets
  app.use(express.static("client/build"));

  // express will serve up index.html if route is unknown
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
