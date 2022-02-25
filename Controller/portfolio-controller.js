const PortfolioModel = require("../model/portfolio-model")



// insert data of portfolio

module.exports.addPortfolio = function(req,res){
    console.log(req.body.CreationDate)
    console.log(req.body.userId)
    console.log(req.body.IsActive)
    console.log(req.body.IsDefault)
    console.log(req.body.PortfolioName)
    console.log(req.body.PortfolioScore)

    let portfolio = new PortfolioModel({
        CreationDate:req.body.CreationDate,
        userId:req.body.userId,
        IsActive:req.body.IsActive,
        IsDefault:req.body.IsDefault,
        PortfolioName:req.body.PortfolioName,
        PortfolioScore:req.body.PortfolioScore,
    })

    portfolio.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }
    })
}

// List all data of portfolio

module.exports.getAllPortfolio = function(req,res){
    PortfolioModel.find(function(err,portfolio){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"Watchlist retrieve",status:200,data:portfolio})
        }

    })
}

//Delete data from portfolio

module.exports.DeletePortfolio = function(req,res){
    let PortfolioId = req.params.PortfolioId

    PortfolioModel.deleteOne({"_id":PortfolioId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of portfolio



module.exports.updatePortfolio = function(req,res){
    
    let paramPortfolioId = req.body.PortfolioId
    let paramuserId = req.body.userId
    let paramCreationDate = req.body.CreationDate
    let paramIsActive = req.body.IsActive
    let paramIsDefault = req.body.IsDefault
    let paramPortfolioName = req.body.PortfolioName
    let paramPortfolioScore = req.body.PortfolioScore
    

    PortfolioModel.updateOne({_id:paramPortfolioId},{userId:paramuserId,CreationDate:paramCreationDate,IsActive:paramIsActive,IsDefault:paramIsDefault,PortfolioName:paramPortfolioName,PortfolioScore:paramPortfolioScore},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    
    })
}