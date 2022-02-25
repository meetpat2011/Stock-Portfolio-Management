const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")

// insert data of user // add[post]

module.exports.addUser = function (req,res){
    // db insert user
    console.log(req.body.Email)
    console.log(req.body.Password)
    console.log(req.body.FirstName)
    console.log(req.body.LastName)
    console.log(req.body.Address)
    console.log(req.body.AnnualIncome)
    console.log(req.body.PhoneNo)
    console.log(req.body.Status)
    console.log(req.body.IsPro)
    console.log(req.body.SubscriptionDate)
    console.log(req.body.PanNo)
       //////
    let FirstName = req.body.FirstName
    let Email = req.body.Email
    let Password = req.body.Password
    //encrypt 

    let encPassword = bcrypt.hashSync(Password,10)

    let role = req.body.role

    

    
    let user = new UserModel({    //making object
        Email:req.body.Email,
        Password:req.body.Password,
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Address:req.body.Address,
        AnnualIncome:req.body.AnnualIncome,
        PhoneNo:req.body.PhoneNo,
        Status:req.body.Status,
        IsPro:req.body.IsPro,
        SubscriptionDate:req.body.SubscriptionDate,
        PanNo:req.body.PanNo
    })
    
     user.save(function(err,success){
        if(err){
            console.log(err);
            //sendMailToDev(err)
            res.json({msg:"something went wrong",status:-1,data:req.body})
        
        }else{
            res.json({msg:"user added",status:200,data:success})
        }
    })
}


//list all data of users

module.exports.getAllUsers = function(req,res){

    UserModel.find(function(err,users){    //usermodel is defined in 1st line which is connected to user in user-model 
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"roles retrieve...",status:200,data:users})
        }
    })
}


// delete data from users

module.exports.deleteUser = function(req,res){
    let userId = req.params.userId

    UserModel.deleteOne({"_id":userId},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed..",status:200,data:data})
        }
    })
}


// update data of users

module.exports.updateUser = function(req,res){

    //update user set userName = admin where userId = 12121
    let paramuserId = req.body.userId
    let paramFirstName = req.body.FirstName
    let paramLastName = req.body.LastName
    let paramEmail = req.body.Email
    let paramPassword = req.body.Password
    let paramAddress = req.body.Address
    let paramAnnualIncome = req.body.AnnualIncome
    let paramPhoneNo = req.body.PhoneNo
    

    UserModel.updateOne({_id:paramuserId},{FirstName:paramFirstName,LastName:paramLastName,Email:paramEmail,Password:paramPassword,Address:paramAddress,AnnualIncome:paramAnnualIncome,PhoneNo:paramPhoneNo},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    })
}

//LOGIN

module.exports.login = function(req,res){
    
    let param_email = req.body.Email
    let param_password = req.body.Password

    let isCorrect = false;

    UserModel.findOne({Email:param_email},function(err,data){
        if(data){
            let ans = bcrypt.compareSync(param_password,data.Password)
            if(ans == true){
                isCorrect = true
            }
        }
        if(isCorrect == false){
            res.json({msg: "Invalid Credentials...",data: req.body, status: -1})  //-1  [ 302 404 500 ]
        }else{
            res.json({ msg: "Login....", data: data, status: 200 })  //http status code
        }
    })
}

