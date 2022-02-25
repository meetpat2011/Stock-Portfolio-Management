const mongoose = require("mongoose")

//Schema

let researchSchema = new mongoose.Schema({
    StockId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"stock"
    },
    BuyPrice:{
        type:Number
    },
    TargetPrice:{
        type:Number
    },
    Recommendations:{
        type:String
    }
})

//Model

const ResearchModel = mongoose.model("research",researchSchema)

module.exports = ResearchModel