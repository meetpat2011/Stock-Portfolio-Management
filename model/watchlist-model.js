const mongoose = require("mongoose")

// schema

let watchlistSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    CreateWatchlist:{
        type:String
    },
    StockId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"stock"
    }
})

//model

const WatchlistModel = mongoose.model("Watchlist",watchlistSchema)

module.exports = WatchlistModel