const express = require("express");

const Company = require("../models/company.model");

const router = express.Router();

router.post("", async(req,res) =>{

    try{
        const company = await Company.create(req.body);

        return res.status(201).send({company});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});


router.get("", async(req,res) =>{

    try{
        const company = await Company.find().lean().exec();

        return res.status(201).send({company});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});


router.get("/:id", async(req,res) =>{

    try{
        const company = await Company.findById(req.params.id).lean().exec();

        return res.status(201).send({company});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});


router.patch("/:id", async(req,res) =>{

    try{
        const company = await Company.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        }).lean().exec()
         
        return res.status(201).send({company});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});


router.delete(":id", async(req,res) =>{

    try{
        const company = await Company.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).send({company});

    }
    catch(e){
       return res.status(500).json({message:e.message,staus:"Failed"});
    }


});

module.exports = router

