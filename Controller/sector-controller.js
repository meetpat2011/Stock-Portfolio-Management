const SectorModel = require("../model/sector-model")

// insert data of sector

module.exports.addSector = function(req,res){
    console.log(req.body.SectorName)

    let sector = new SectorModel({
        SectorName:req.body.SectorName
    })

    sector.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }
    })
}

// List all data of sectors

module.exports.getAllSector = function(req,res){
    SectorModel.find(function(err,sector){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"sector retrieve",status:200,data:sector})
        }

    })
}

//Delete data from sectors

module.exports.deleteSector = function(req,res){
    let SectorId = req.params.SectorId

    SectorModel.deleteOne({"_id":SectorId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of sector

module.exports.updateSector = function(req,res){


    let SectorId = req.body.SectorId
    let SectorName = req.body.SectorName

    SectorModel.updateOne({_id:SectorId},{SectorName:SectorName},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    })
}