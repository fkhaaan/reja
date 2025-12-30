 const http = require('http');
 
 const mongodb = require("mongodb");
let db;
 const connectionString = "mongodb+srv://fkhaaan:z4q1M1L3otxX1VHp@cluster0.bm2hpyn.mongodb.net/Reja?appName=Cluster0"
 
 mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, (err, client) => {
   if(err) console.log("ERROR on connection mongodb");
   else {
    console.log("Mongodb connected successfully");
    module.exports = client;
    const app = require("./app");
     const server = http.createServer(app);
 let PORT = 3000;
 server.listen(PORT, function() {
    console.log(
      `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
    );
 });

   }
});
 
 