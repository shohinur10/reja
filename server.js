console.log("Wed Serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");

// 1: Static Files and Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session (not implemented yet)

// 3: Views
app.post("/create-item",(req, res) =>{
    console.log(req.body);
    res.json({test:"success"});

});
app.set("views", "views"); 
app.set("view engine", "ejs"); // Fixed the typo


// 4: Routes
app.get("/", function(req, res) {
    res.render("harid"); // Make sure 'views/harid.ejs' exists
});

app.get("/hello", function(req, res) {
    res.end(`<h1 style="background:blue">Hello World by Shohinur</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});


