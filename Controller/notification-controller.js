const NotificationModel = require("../model/notification-model")



// insert data of notification

module.exports.addNotification = function(req,res){
    console.log(req.body.userId)
    console.log(req.body.NotificationType)
    console.log(req.body.Content)
    console.log(req.body.IsRead)
    console.log(req.body.Date)

    let notification = new NotificationModel({
        NotificationType:req.body.NotificationType,
        userId:req.body.userId,
        Content:req.body.Content,
        IsRead:req.body.IsRead,
        Date:req.body.Date
    })

    notification.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }
    })
}

// List all data of notification

module.exports.getAllNotification = function(req,res){
    NotificationModel.find(function(err,notification){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"Watchlist retrieve",status:200,data:notification})
        }

    })
}

//Delete data from notification

module.exports.DeleteNotification = function(req,res){
    let NotificationId = req.params.NotificationId

    NotificationModel.deleteOne({"_id":NotificationId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of notification



module.exports.updateNotification = function(req,res){
    
    let paramuserId = req.body.userId
    let paramNotificationType = req.body.NotificationType
    let paramContent = req.body.Content
    let paramIsRead = req.body.IsRead
    let paramDate = req.body.Date
    

    NotificationModel.updateOne({_id:paramNotificationId},{userId:paramuserId,NotificationType:paramNotificationType,Content:paramContent,IsRead:paramIsRead,Date:paramDate},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    
    })
}