const mongoose = require("mongoose")

//Schema

let paymentSchema = new mongoose.Schema({
    Amount:{
        type:Number
    },
    TransactionDate:{
        type:Date
    },
    TransactionType:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

})

//Model

const PaymentModel = mongoose.model("Payment",paymentSchema)

module.exports = PaymentModel