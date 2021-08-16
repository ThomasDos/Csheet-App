const app = require("express")();

app.route("/test").get((req, res) => {
  console.log("Test route triggered");
  res.send("Res test route");
});

module.exports = app;
