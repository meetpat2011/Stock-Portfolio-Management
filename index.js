const express = require("express")                      //written in every program - lika a boilerplate to link with express
const mongoose = require("mongoose")
const sessionController = require("./controller/Session-controller")  ////written in every program - lika a boilerplate - to link with session-controller
const roleController = require("./controller/role-controller")


const app = express()
//middle ware
app.use(express.json()) // mobile : accept json data from request and set data into body // //written in every program - lika a boilerplate
app.use(express.urlencoded({extended:true})) // web : accept url encoded data from request and set data into body ////written in every program - lika a boilerplate

//databases
mongoose.connect('mongodb://localhost:27017/portfoliomng',function(err){  // connection to database and mentioning function err to know database is connectd or not
  if(err){
    console.log("db connection failed...")
  }else{
    console.log("db connected....")
  }
})  // you can  copy paste from their npm mongoose website


//urls

app.get("/",function(req,res){      // another way of getting login/signup without declaring in session - controller // "/" --> url
    res.write("welcome...")         // whenever url of localhost:3000/ will be entered, it --> gives welcome output as it is written in res.write
    res.end()
})

// to fetch function which is written in session-controller by app.get

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)

//app.get("/login",function(req,res){      // another way of getting login/signup without declaring in session - controller
  // res.write("login")
    //res.end()
//})

//app.get("/signup",function(req,res){    // // another way of getting login/signup without declaring in session - controller
  //  res.write("signup")
    //res.end()
//})

//role
app.post("/roles",roleController.addRole)



// SERVER 

app.listen(3000,function(){               // mandatory like that of boilerplate - which will start server at that local host port
    console.log("server started on 3000");

})