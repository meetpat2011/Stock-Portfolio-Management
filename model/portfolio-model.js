const mongoose = require("mongoose")

//Schema

let portfolioSchema = new mongoose.Schema({
    CreationDate:{
        type:Date
    },
    IsActive:{
        type:Number
    },
    PortfolioName:{
        type:String
    },
    portfolioScore:{
        type:Number
    },
    IsDefault:{
        type:Number
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

})

//Model

const PortfolioModel = mongoose.model("Portfolio",portfolioSchema)

module.exports = PortfolioModel