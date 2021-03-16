const path = require('path');

const express = require('express');

const app = express();

const hbs =require('hbs');

const port = 3000;

//built in middleware
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");
//to set the view engine
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

//template engine route
app.get("",(req,res)=>{
  res.render("index",{
    channelname:"hello",
  });
});

app.get("/about",(req,res)=>{
  res.render("about");
});
app.get('/', (req, res) => {
  res.write('<h1>Hello World / home page</h1>');
  res.write('<h1>Hello World / home page</h1>');
  res.send();
});

app.get('/about', (req, res) => {
  res.send('Hello World /about page');
});

app.get('/temp', (req, res) => {
  res.send('Hello World /temp page');
});

app.get('/weather', (req, res) => {
  res.send([{
    id:2,
    name:"nishikanta"
  },
  {
    id:2,
    name:"nishikanta"
  },{
    id:2,
    name:"nishikanta"
  }]);
});

app.get("*",(req,res)=>{
  res.render("404",{
    errorComment:"oops page couldn't be found ",
  });
});
app.listen(port,() =>{
  console.log("localhost 3000");
});