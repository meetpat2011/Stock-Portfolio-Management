const usersubscriptionModel = require("../model/usersubscription-model")
const UserModel = require("../model/user-model")

//insert data of user subscription

module.exports.addUserSubscription = function(req,res){
    console.log(req.body.SubscribeDate)
    console.log(req.body.Expdate)
    console.log(req.body.AdvanceRenewDate)
    console.log(req.body.IsAdvanceRenew)

    let usersubscription = new usersubscriptionModel({
        SubscribeDate:req.body.SubscribeDate,
        Expdate:req.body.Expdate,
        AdvanceRenewDate:req.body.AdvanceRenewDate,
        IsAdvanceRenew:req.body.IsAdvanceRenew,
        userId:req.body.userId
    })
    
    usersubscription.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }

    })

}

//list all data of user subscription

module.exports.getAllUserSubscription = function(req,res){
    usersubscriptionModel.find(function(err,usersubscription){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }else{
            res.json({msg:" user subscription retrieve",status:200,data:usersubscription})
        }
    })
}

//delete data from user subscription

module.exports.deleteUserSubscription = function(req,res){
    let userId = req.params.userId

    usersubscriptionModel.deleteOne({"_id":userId},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of user subscription
module.exports.updateUserSubscription = function(req,res){

    let paramuserId = req.body.userId
    let paramSubscribeDate = req.body.SubscribeDate
    let paramExpDate= req.body.ExpDate
    let paramAdvanceRenewDate = req.body.AdvanceRenewDate
    let paramIsAdvanceRenew = req.body.IsAdvanceRenew
    
    

    usersubscriptionModel.updateOne({_id:paramuserId},{SubscribeDate:paramSubscribeDate,ExpDate:paramExpDate,AdvanceRenewDate:paramAdvanceRenewDate,IsAdvanceRenew:paramIsAdvanceRenew},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    })
}
