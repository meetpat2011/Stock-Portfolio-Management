const WatchlistModel = require("../model/watchlist-model")
const StockModel = require("../model/stock-model")

// insert data of watchlist

module.exports.addWatchlist = function(req,res){
    console.log(req.body.Name)
    console.log(req.body.CreateWatchlist)
    console.log(req.body.StockId)

    let watchlist = new WatchlistModel({
        Name:req.body.Name,
        CreateWatchlist:req.body.CreateWatchlist,
        StockId:req.body.StockId
    })

    watchlist.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }
    })
}

// List all data of watchlist

module.exports.getAllWatchlist = function(req,res){
    WatchlistModel.find(function(err,watchlist){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"Watchlist retrieve",status:200,data:watchlist})
        }

    })
}

//Delete data from watchlist

module.exports.DeleteWatchlist = function(req,res){
    let WatchlistId = req.params.WatchlistId

    WatchlistModel.deleteOne({"_id":WatchlistId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of watchlist

module.exports.updateWatchlist = function(req,res){

    let paramWatchlistId = req.body.WatchlistId
    let paramName = req.body.Name
    let paramCreateWatchlist = req.body.CreateWatchlist
    let paramStockId = req.body.StockId
    

    WatchlistModel.updateOne({_id:paramWatchlistId},{Name:paramName,CreateWatchlist:paramCreateWatchlist,StockId:paramStockId},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    })
}