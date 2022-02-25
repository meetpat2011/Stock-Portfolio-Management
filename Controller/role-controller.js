const RoleModel = require("../model/role-model")


// insert data of roles

module.exports.addRole = function (req,res){
// db insert role
console.log(req.body.roleName);

let role = new RoleModel({    //making obejct
    roleName:req.body.roleName
})


role.save(function(err,success){
    if(err){
        console.log(err);
        //sendMailToDev(err)
        res.json({msg:"something went wrong",status:-1,data:req.body})
    
    }else{
        res.json({msg:"role added",status:200,data:success})
    }
})
}

//list all data of roles

module.exports.getAllRoles = function(req,res){
    //role --> db --> select * from roles
    //model
    //REST
    RoleModel.find(function(err,roles){    //rolemodel is defined in 1st line which is connected to role in role-model 
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"roles retrieve...",status:200,data:roles})
        }
    })
}

// delete data from roles

module.exports.deleteRole = function(req,res){
    let roleId = req.params.roleId

    RoleModel.deleteOne({"_id":roleId},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed..",status:200,data:data})
        }
    })
}

// update data of roles

module.exports.updateRole = function(req,res){

    //update role set roleName = admin where roleId = 12121
    let roleId = req.body.roleId
    let roleName = req.body.roleName

    RoleModel.updateOne({_id:roleId},{roleName:roleName},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    })
}


// roleTd pk   will increment automatically by mangoose
// roleName    it will be a input