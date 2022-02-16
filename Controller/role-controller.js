const RoleModel = require("../model/role-model")


module.exports.addRole = function (req,res){
// db insert role
console.log(req.body.roleName)

let role = new RoleModel({    //making obejct
    roleName:req.body.roleName
})

role.save(function(err,success){
    if(err){
        console.log(err);
        //sendMailToDev(err);
        res.json({msg:"something went wrong",status:-1,data:req.body})
    
    }else{
        res.json({msg:"role added",status:200,data:success})
    }
})

}

// roleTd pk   will increment automatically
// roleName    it will be a input