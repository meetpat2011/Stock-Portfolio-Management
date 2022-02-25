const FeedbackModel = require("../model/feedback-model")


// insert data of feedback

module.exports.addFeedback = function(req,res){
    console.log(req.body.Feedback)
    console.log(req.body.userId)
    console.log(req.body.UserName)

    let feedback = new FeedbackModel({
        Feedback:req.body.Feedback,
        userId:req.body.userId,
        UserName:req.body.UserName
    })

    feedback.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }
    })
}

// List all data of feedback

module.exports.getAllFeedback = function(req,res){
    FeedbackModel.find(function(err,feedback){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"Watchlist retrieve",status:200,data:feedback})
        }

    })
}

//Delete data from feedback

module.exports.DeleteFeedback = function(req,res){
    let FeedbackId = req.params.FeedbackId

    FeedbackModel.deleteOne({"_id":FeedbackId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of feedback

module.exports.updateFeedback = function(req,res){

    let paramFeedbackId = req.body.FeedbackId
    let paramFeedback = req.body.Feedback
    let paramuserId = req.body.userId
    let paramUserName = req.body.UserName
    

    FeedbackModel.updateOne({_id:paramFeedbackId},{Feedback:paramFeedback,userId:paramuserId,UserName:paramUserName},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    })
}