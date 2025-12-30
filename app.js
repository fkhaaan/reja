 console.log('Web serverni boshlash');
 const express = require("express");
 const app = express();
 
// MOngodb chaqirish
const db =require("./server").db();

 
 // 1 Kirish co d e               
 app.use(express.static("public"));
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));

 // 2 Session c  ode                     
                              
 // 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

 // 4 Routing code
 app.post("/create-item", (req, res) => {
   //console.log(req.body);
   //res.json({test: "success"})
 });    
      
 app.get('/author', (req, res) => {
  res.render("author", {user: user});
 });
 app.get("/", function (req, res) {
     res.render("reja");
 });        
            
 
 module.exports = app;
            