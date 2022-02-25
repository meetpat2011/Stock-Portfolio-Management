const PaymentModel = require("../model/payment-model")
const UserModel = require("../model/user-model")


// insert data of payment

module.exports.addPayment = function(req,res){
    console.log(req.body.userId)
    console.log(req.body.Amount)
    console.log(req.body.TransactionDate)
    console.log(req.body.TransactionType)

    let payment = new PaymentModel({
        Amount:req.body.Amount,
        userId:req.body.userId,
        TransactionDate:req.body.TransactionDate,
        TransactionType:req.body.TransactionType
    })

    payment.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }
    })
}

// List all data of payment

module.exports.getAllPayment = function(req,res){
    PaymentModel.find(function(err,payment){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"Watchlist retrieve",status:200,data:payment})
        }

    })
}

//Delete data from payment

module.exports.DeletePayment = function(req,res){
    let TransactionId = req.params.TransactionId

    PaymentModel.deleteOne({"_id":TransactionId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of payment



module.exports.updatePayment = function(req,res){
    
    let paramuserId = req.body.userId
    let paramTransactionId = req.body.TransactionId
    let paramAmount = req.body.Amount
    let paramTransactionDate = req.body.TransactionDate
    let paramTransactionType = req.body.TransactionType
    

    PaymentModel.updateOne({_id:paramTransactionId},{userId:paramuserId,Amount:paramAmount,TransactionDate:paramTransactionDate,userId:paramuserId,TransactionType:paramTransactionType},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    
    })
}