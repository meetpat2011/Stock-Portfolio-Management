const mongoose = require("mongoose")

//schema

let UserSchema = new mongoose.Schema({
        Email:{
            type:String
        },
        Password:{
            type:String
        },
        FirstName:{
            type:String
        },
        LastName:{
            type:String
        },
        Address:{
            type:String
        },
        AnnualIncome:{
            type:Number
        },
        PhoneNo:{
            type:String
        },
        status:{
            type:Number
        },
        IsPro:{
            type:Number
        },
        SubscriptionDate:{
            type:Date
        },
        PanNo:{
            type:String
        },
        role : {
            type:mongoose.Schema.Types.ObjectId,
            ref:"role"
    }

})



// Model

const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel

