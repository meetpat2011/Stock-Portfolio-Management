const mongoose = require("mongoose")

//Schema

let feedbackSchema = new mongoose.Schema({
    Feedback:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    UserName:{
        type:String
    }
})

//Model

const FeedbackModel = mongoose.model("feedback",feedbackSchema)

module.exports = FeedbackModel