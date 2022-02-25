const UserPortfolioModel = require("../model/user-portfolio-model")



// insert data of userportfolio

module.exports.addUserPortfolio = function(req,res){
    console.log(req.body.PortfolioId)
    console.log(req.body.userId)
    console.log(req.body.StockId)
    console.log(req.body.Quantity)
    console.log(req.body.PurchaseDate)
    console.log(req.body.InvestPrice)
    console.log(req.body.CurrentPrice)
    console.log(req.body.TotalProfitableAmt)

    let userportfolio = new UserPortfolioModel({
        PortfolioId:req.body.PortfolioId,
        userId:req.body.userId,
        StockId:req.body.StockId,
        Quantity:req.body.Quantity,
        PurchaseDate:req.body.PurchaseDate,
        InvestPrice:req.body.InvestPrice,
        CurrentPrice:req.body.CurrentPrice,
        TotalProfitableAmt:req.body.TotalProfitableAmt,
    })

    userportfolio.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }
    })
}

// List all data of user portfolio

module.exports.getAllUserPortfolio = function(req,res){
    UserPortfolioModel.find(function(err,userportfolio){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"Watchlist retrieve",status:200,data:userportfolio})
        }

    })
}

//Delete data from user portfolio

module.exports.DeleteUserPortfolio = function(req,res){
    let UserPortfolioId = req.params.UserPortfolioId

    UserPortfolioModel.deleteOne({"_id":UserPortfolioId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of user portfolio



module.exports.updateUserPortfolio = function(req,res){
    
    let paramUserPortfolioId = req.body.UserPortfolioId
    let paramPortfolioId = req.body.PortfolioId
    let paramuserId = req.body.userId
    let paramStockId = req.body.StockId
    let paramQuantity = req.body.Quantity
    let paramPurchaseDate = req.body.PurchaseDate
    let paramInvestPrice = req.body.InvestPrice
    let paramCurrentPrice = req.body.CurrentPrice
    let paramTotalProfitableAmount = req.body.TotalProfitableAmt
    

    UserPortfolioModel.updateOne({_id:paramUserPortfolioId},{userId:paramuserId,PortfolioId:paramPortfolioId,StockId:paramStockId,Quantity:paramQuantity,PurchaseDate:paramPurchaseDate,InvestPrice:paramInvestPrice,CurrentPrice:paramCurrentPrice,TotalProfitableAmt:paramTotalProfitableAmount},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    
    })
}