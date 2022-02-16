const mongoose = require("mongoose")

//schema

let RoleSchema = new mongoose.Schema({
    roleName:{            // role id will be genereted by mongodb automatically by _id
        type:String
    }//,
    //roleDescription:{
        //type:String
    //}
})


//model

let RoleModel = mongoose.model("role",RoleSchema)    // ("tablename",schema name)

module.exports = RoleModel