const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
{
    job_title:{type:String,required:true},
    city :{type:String,required:true},
    skills:[{type:String,required:true}],
    rating:{type:String,required:true},
    work_From_Home:{type:String,required:false},
    notice_period:{type:Number,required:false},
    company_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"company",
        required:true,
    },
   

},


{
    versionKey:false,
    timestamps:true,
}

);

module.exports = mongoose.model("job",jobSchema);