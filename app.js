console.log("Web serverni boshlash");
const express = require("express");
const app = express();

// MOngodb chaqirish
const db = require("./server").db();

// 1 Kirish co d e
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session c  ode

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
      
        res.render("reja", { items: data });
      }
    });
});
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  let new_reja = req.body.reja; 
 
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) console.log("Error:", err);
    else {
      res.end("/");
    }
  });
});

module.exports = app;
