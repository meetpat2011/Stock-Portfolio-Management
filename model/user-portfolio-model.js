const mongoose = require("mongoose")

//Schema

let userportfolioSchema = new mongoose.Schema({
    PortfolioId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"portfolio"
    },
    StockId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"stock"
    },
    Quantity:{
        type:Number
    },
    PurchaseDate:{
        type:Date
    },
    InvestPrice:{
        type:Number
    },
    CurrentPrice:{
        type:Number
    },
    TotalProfitableAmt:{
        type:Number
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

})

//Model

const UserPortfolioModel = mongoose.model("UserPortfolio",userportfolioSchema)

module.exports = UserPortfolioModel