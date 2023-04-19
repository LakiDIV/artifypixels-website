//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// Serve EJS files
function serveEjsFile(route, filePath) {
    app.get(route, function (req, res) {
      res.render(filePath);
    });
  }
  
  serveEjsFile("/", "home");
  serveEjsFile("/contact", "contact");
  serveEjsFile("/about", "about");
  serveEjsFile("/compose", "compose");
  


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  