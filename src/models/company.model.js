const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
{
    company_Name :{type:String,required:true},
    year_Of_Establishment :{type:Number,required:false},
    company_Product :{type:String,required:false},
    

},
{
    versionKey:false,
    timestamps:true,
}

);

module.exports = mongoose.model("company",companySchema);