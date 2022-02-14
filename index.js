const express = require("express")
const sessionController = require("./controller/Session-controller")

const res = require("express/lib/response")

const app = express()

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)

//app.get("/login",function(req,res){
  // res.write("login")
    //res.end()
//})

//app.get("/signup",function(req,res){
  //  res.write("signup")
    //res.end()
//})

app.listen(3000,function(){
    console.log("server started on 3000");

})