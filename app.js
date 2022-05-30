const express = require("express");
const path = require("path");
const timeChecker = require("./middleware/timechecker");

//Initialize app
const app = express();

//styling using the static middleware
app.use(express.static("./styles"));

//time checker middleware
app.use(timeChecker);

//setting up template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//express routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

//server
app.listen(5000, () => {
  console.log("listening on port 5000");
});
