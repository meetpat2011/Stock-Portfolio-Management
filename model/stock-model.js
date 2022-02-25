const mongoose = require("mongoose")

//schema

let stockSchema = new mongoose.Schema({
    SectorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"sector"
    },
    IsActive:{
        type:Number
    },
    StockName:{
        type:String
    },
    CompanyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"company"
    },
    BuySaleSignal:{
        type:String
    }
})

//Model

const StockModel = mongoose.model("Stocks",stockSchema)

module.exports = StockModel