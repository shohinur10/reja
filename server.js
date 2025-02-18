console.log("Wed Serverni boshlash");

const express = require("express");
const app = express();
const  http =require("http");


//1 Kirish 

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: Sesssion 

//3 Views
app.set("views", "views");
app.set("viewe enguine", "ejs");

//4 Routing code


app.get("/gift", function(req, res){
    res.end(`<h1>You are the gift on area </h1>`);
 //   pp.get("/hello", function(req, res){
 //       res.end(`<h1 style="background:blue">Hello World by Shohinur</h1>`);
 //   });
    pp.get("/hello", function(req, res){
        res.end(`<h1>Hello World by Shohinur</h1>`);
    });
});


const server = http.createServer(app);
let PORT =3000;
server.listen(PORT, function (){
console.log(`The server is running successfully on port: ${PORT}`);
});


