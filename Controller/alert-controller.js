const AlertModel = require("../model/alert-model")


// insert data of Alert

module.exports.addAlert = function(req,res){
    console.log(req.body.StockId)
    console.log(req.body.userId)
    console.log(req.body.Price)
    console.log(req.body.AlertType)

    let alert = new AlertModel({
        StockId:req.body.StockId,
        userId:req.body.userId,
        Price:req.body.Price,
        AlertType:req.body.AlertType
    })

    alert.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }
    })
}

// List all data of Alert

module.exports.getAllAlert = function(req,res){
    AlertModel.find(function(err,alert){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"Watchlist retrieve",status:200,data:alert})
        }

    })
}

//Delete data from alert

module.exports.DeleteAlert = function(req,res){
    let AlertId = req.params.AlertId

    FeedbackModel.deleteOne({"_id":AlertId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of Alert

module.exports.updateAlert = function(req,res){

    let paramAlertId = req.body.AlertId
    let paramuserId = req.body.userId
    let paramStockId = req.body.StockId
    let paramAlertType = req.body.AlertType
    let paramPrice = req.body.Price
    

    AlertModel.updateOne({_id:paramAlertId},{StockId:paramStockId,Price:paramPrice,userId:paramuserId,AlertType:paramAlertType},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    })
}