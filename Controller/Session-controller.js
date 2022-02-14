const fs = require("fs")

function login(req,res){
    let loginHtml = fs.readFileSync("./views/login.html")
    res.write("loginHtml")
    res.end()

}

function signup(req,res){
    let signupHtml = fs.readFileSync("./views/signup.html")
    res.write("SignupHtml")
    res.end()
}

module.exports.login = login
module.exports.signup = signup
//export
