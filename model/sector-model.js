const mongoose = require("mongoose")

let sectorSchema = new mongoose.Schema({
    SectorName:{
        type:String
    }
})

let SectorModel = mongoose.model("sector",sectorSchema)
module.exports = SectorModel