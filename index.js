const express = require("express");
const app = express();

// default route handler
app.get("/", (req, res) => {
  res.send({ greetings: "citizen!" });
});

// dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
