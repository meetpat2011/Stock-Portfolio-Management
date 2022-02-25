const CompanyModel = require("../model/company-model")

//insert data of company 

module.exports.addCompany = function(req,res){
    console.log(req.body.CompanyName)
    console.log(req.body.Info)
    console.log(req.body.Ratings)


    let company = new CompanyModel({
        CompanyName:req.body.CompanyName,
        Info:req.body.Info,
        Ratings:req.body.Ratings
    })
    
    company.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({msg:"user added",status:200,data:success})
        }

    })
}


    //list all data of company

module.exports.getAllCompany = function(req,res){
    CompanyModel.find(function(err,company){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }else{
            res.json({msg:" user subscription retrieve",status:200,data:company})
        }
    })
}

//delete data from company

module.exports.deleteCompany = function(req,res){
    let CompanyId = req.params.CompanyId

    CompanyModel.deleteOne({"_id":CompanyId},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed",status:200,data:data})
        }
    })
}

// update data of company

module.exports.updateCompany = function(req,res){

    //update role set roleName = admin where roleId = 12121
    let paramCompanyId = req.body.CompanyId
    let paramCompanyName = req.body.CompanyName
    let paramInfo = req.body.Info
    let paramRatings = req.body.Ratings

    CompanyModel.updateOne({_id:paramCompanyId},{CompanyName:paramCompanyName,Info:paramInfo,Ratings:paramRatings},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    })
}

