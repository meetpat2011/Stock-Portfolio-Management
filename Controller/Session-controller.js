const fs = require("fs")

function login(req,res){                                   // making a function in session-controller of login to be called at index.js
    let loginHtml = fs.readFileSync("./views/login.html")  //linking to file html of signup.html
    res.write(loginHtml)
    res.end()

}

function signup(req,res){                                     // making a function in session-controller of signup to be called at index.js                              
    let signupHtml = fs.readFileSync("./views/signup.html")  //linking to file html of login.html
    res.write(signupHtml)
    res.end()
}
function saveuser(req,res){                                 // // making a function in session-controller of saveuser to be called at index.js 
    console.log(req.body) // request : body mein kya mila? will print it... whatever will be entered in field is displayed in terminal.
    res.json({            // it will give respond in json on which if saveuser fields are inserted in postman. 
        msg:"done donadone...",
        status:200,
        data:req.body
    })
    }

    
// for export of function to index.js - login , signup , saveuser 

module.exports.login = login 
module.exports.signup = signup
module.exports.saveuser = saveuser
//export
