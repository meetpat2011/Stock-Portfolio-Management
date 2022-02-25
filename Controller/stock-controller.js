const StockModel = require("../model/stock-model")

//insert data of stock

module.exports.addStock = function(req,res){
    console.log(req.body.SectorId)
    console.log(req.body.IsActive)
    console.log(req.body.StockName)
    console.log(req.body.CompanyId)
    console.log(req.body.BuySaleSignal)


    let stock = new StockModel({
        SectorId:req.body.SectorId,
        IsActive:req.body.IsActive,
        StockName:req.body.StockName,
        CompanyId:req.body.CompanyId,
        BuySaleSignal:req.body.BuySaleSignal
    })
    
    stock.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }

    })
}


    //list all data of stock

module.exports.getAllStock = function(req,res){
    StockModel.find(function(err,stock){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }else{
            res.json({msg:" user subscription retrieve",status:200,data:stock})
        }
    })
}

//delete data from stock

module.exports.deleteStock = function(req,res){
    let StockId = req.params.StockId

    StockModel.deleteOne({"_id":StockId},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of stock

module.exports.updateStock = function(req,res){

    let paramStockId = req.body.StockId
    let paramSectorId = req.body.SectorId
    let paramIsActive = req.body.IsActive
    let paramStockName = req.body.StockName
    let paramCompanyId = req.body.CompanyId
    let paramBuySaleSignal = req.body.BuySaleSignal

    StockModel.updateOne({_id:paramStockId},{SectorId:paramSectorId,IsActive:paramIsActive,StockName:paramStockName,CompanyId:paramCompanyId,BuySaleSignal:paramBuySaleSignal},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    })
}