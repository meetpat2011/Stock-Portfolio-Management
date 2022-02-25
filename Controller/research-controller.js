const ResearchModel = require("../model/research-model")


// insert data of research

module.exports.addResearch = function(req,res){
    console.log(req.body.StockId)
    console.log(req.body.BuyPrice)
    console.log(req.body.TargetPrice)
    console.log(req.body.Recommendations)

    let research = new ResearchModel({
        StockId:req.body.StockId,
        BuyPrice:req.body.BuyPrice,
        TargetPrice:req.body.TargetPrice,
        Recommendations:req.body.Recommendations
    })

    research.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }
    })
}

// List all data of research

module.exports.getAllResearch = function(req,res){
    ResearchModel.find(function(err,alert){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"Watchlist retrieve",status:200,data:research})
        }

    })
}

//Delete data from research

module.exports.DeleteResearch = function(req,res){
    let ResearchId = req.params.ResearchId

    ResearchModel.deleteOne({"_id":ResearchId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of research

module.exports.updateResearch = function(req,res){

    let paramResearchId = req.body.ResearchId
    let paramStockId = req.body.StockId
    let paramBuyPrice = req.body.BuyPrice
    let paramTargetPrice = req.body.TargetPrice
    let paramRecommendations = req.body.Recommendations
    

    ResearchModel.updateOne({_id:paramResearchId},{StockId:paramStockId,BuyPrice:paramBuyPrice,TargetPrice:paramTargetPrice,Recommendations:paramRecommendations},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    })
}