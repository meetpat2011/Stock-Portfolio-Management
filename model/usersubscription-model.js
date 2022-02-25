const mongoose = require("mongoose")

//schema

let usersubscriptionSchema = new mongoose.Schema({
        SubscribeDate:{
            type:Date
        },
        ExpDate:{
            type:Date
        },
        AdvanceRenewDate:{
            type:Date
        },
        IsAdvanceRenew:{
            type:Number
        },
        UserId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
})

//MODEL

const usersubscriptionModel = mongoose.model("usersubscription",usersubscriptionSchema)

module.exports = usersubscriptionModel