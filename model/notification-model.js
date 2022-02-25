const mongoose = require("mongoose")

//Schema

let notificationSchema = new mongoose.Schema({
    NotificationType:{
        type:Number
    },
    Content:{
        type:String
    },
    IsRead:{
        type:Number
    },
    Date:{
        type:Date
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

})

//Model

const NotificationModel = mongoose.model("Notification",notificationSchema)

module.exports = NotificationModel