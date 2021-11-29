const express = require("express");

const Job = require("../models/job.model");

const router = express.Router();

router.post("", async(req,res) =>{

    try{
        const job = await Job.create(req.body);

        return res.status(201).send({job});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});

router.get("", async(req,res) =>{

    try{
        const job = await Job.find().lean().exec();

        return res.status(201).send({job});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});


router.get("/pune/:name", async(req,res) =>{

    try{
        const job = await Job.find()
        .populate({path:"company_id"})
        .lean().exec();
// console.log(req.params.skill.city)
    //   console.log(req.params.skill)
// console.log(req.params.name)
// console.log(job[0].skills[0])

var city =[];
for(let i = 0; i < job.length; i++){
    for(let j = 0; j < job[i].skills.length; j++){
        if(job[i].skills[j] === req.params.name && job[i].city === "Pune" ){
             city.push(job[i])
        }
    }
}

         return res.status(201).send({city});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});


router.get("/banglore/:name", async(req,res) =>{

    try{
        const job = await Job.find()
        .populate({path:"company_id"})
        .lean().exec();
// console.log(req.params.skill.city)
    //   console.log(req.params.skill)
// console.log(req.params.name)
// console.log(job[0].skills[0])

var city =[];
for(let i = 0; i < job.length; i++){
    for(let j = 0; j < job[i].skills.length; j++){
        if(job[i].skills[j] === req.params.name && job[i].city === "banglore" ){
             city.push(job[i])
        }
    }
}

         return res.status(201).send({city});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});


router.get("/chennai/:name", async(req,res) =>{

    try{
        const job = await Job.find()
        .populate({path:"company_id"})
        .lean().exec();
// console.log(req.params.skill.city)
    //   console.log(req.params.skill)
// console.log(req.params.name)
// console.log(job[0].skills[0])

var city =[];
for(let i = 0; i < job.length; i++){
    for(let j = 0; j < job[i].skills.length; j++){
        if(job[i].skills[j] === req.params.name && job[i].city === "chennai" ){
             city.push(job[i])
        }
    }
}

         return res.status(201).send({city});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});




router.get("/workfromhome", async(req,res) =>{

    try{
        const job = await Job.find()
        .populate({path:"company_id"})
        .lean().exec();

        var workhome = [];
        for(let i = 0; i < job.length;i++){
            if(job[i].work_From_Home === "yes"){
               workhome.push(job[i])
            }
        }
        // console.log(job[0].work_From_Home)

        return res.status(201).send({workhome});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});
router.get("/notice", async(req,res) =>{

    try{
        const job = await Job.find()
        .populate({path:"company_id"})
        .lean().exec();
// console.log(req.params.skill.city)
    //   console.log(req.params.skill)
  console.log(job[0].notice_period)
  var noticeOf2months = [];
        for(let i = 0; i < job.length;i++){
            if(job[i].notice_period === 2){
                noticeOf2months.push(job[i])
            }
        }
        // console
         return res.status(201).send({noticeOf2months});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});
router.get("/sortedrating", async(req,res) =>{

    try{
        const job = await Job.find()
        .populate({path:"company_id"})
        .lean().exec();
// console.log(req.params.skill.city)
    //   console.log(req.params.skill)
  console.log(job[0].rating)
//   var noticeOf2months = [];
var rating1 = []
        for(let i = 0; i < job.length;i++){
            
            rating1.push(job[i].rating)
            
        }
        console.log(rating1)
        rating1.sort((a,b)=>a-b)
        rating1.reverse()
        console.log(rating1)
    var ratesort = [];
        for(let j = 0; j < rating1.length; j++){
            for(let x = 0; x < job.length; x++){
                if(job[x].rating === rating1[j]){
                      ratesort.push(job[x])
                }
            }
        }
         return res.status(201).send({ratesort});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});


router.get("/companyhavingmorejobs", async(req,res) =>{

    try{
        const job = await Job.find()
        .populate({path:"company_id"})
        .lean().exec();
console.log(job[0].company_id.company_Name)

var count = 0; var count1 = 0; var count2 = 0;
        for(let i = 0; i < job.length;i++){
          if(job[i].company_id.company_Name =="TATA"){
              count++
          }
          if(job[i].company_id.company_Name =="Mahinra"){
            count1++
        } 
        if(job[i].company_id.company_Name =="Infosys"){
            count2++
        }   
            // job[i].rating.value.sort((a,b)=>a-b)
            
        }
        // console
          if(count > count1 && count > count2){
              var a = job[0].company_id
              console.log(count)
              return res.status(201).send({a})
          }
          if(count1 > count && count1 >count2){
              var v = job[1].company_id
            return res.status(201).send({v})
        }
        if(count2 > count1 && count2 > count){
            var c = job[2].company_id
            return res.status(201).send({c})
        }

        //  return res.status(201).send({job});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});

router.get("/:id", async(req,res) =>{

    try{
        const job = await Job.findById(req.params.id).lean().exec();

        return res.status(201).send({job});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});


router.patch("/:id", async(req,res) =>{

    try{
        const job = await Job.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        }).lean().exec()
         
        return res.status(201).send({job});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});


router.delete(":id", async(req,res) =>{

    try{
        const job = await Job.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).send({job});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});

module.exports = router

