const mongoose = require("mongoose")

//Schema

let alertSchema = new mongoose.Schema({
    StockId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"stock"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    Price:{
        type:Number
    },
    AlertType:{
        type:Number
    }
})

//Model

const AlertModel = mongoose.model("Alert",alertSchema)

module.exports = AlertModel