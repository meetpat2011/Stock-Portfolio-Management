const mongoose = require("mongoose")

//Schema

let CompanySchema = new mongoose.Schema({
    CompanyName:{
        type:String
    },
    Info:{
        type:String
    },
    Ratings:{
        type:Number
    }
})


//Model

const CompanyModel = mongoose.model("company",CompanySchema)
module.exports = CompanyModel