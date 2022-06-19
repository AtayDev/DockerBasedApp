let express = require('express');
let bodyParser = require('body-parser');
let crud = require('./mongo-crud.js');
//"urlencoded" is a Middleware for parsing post requests
//A Middleware is a function that gets involved between the moment
//we sent the request and the moment we get a response back
//Essentially we can have middlewares for: Authentication,Logging,Request Parsing

let app = express();

//Use EJS a template engine
app.set('view-engine','ejs');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.post("/", (req, res) => {
  crud.save(req.body);
  res.send("<a href=/users>List of Users</a>");
  
});

const getResult= async ()=>{
  const result=await crud.read;
  return result

}
app.get("/users",(req,res)=>{
  crud.read(res);
})

//Example a Middlware
const logger = (req, res, next) => {
  console.log("This is the logger middlware");
  next();
};

app.listen(3000, () => {
  console.log("App started in port 3000");
});

