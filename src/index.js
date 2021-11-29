const express = require("express");

const mongoose = require("mongoose");

const connect = require("./configs/db");

const app = express();

app.use(express.json());


const Company = require("./models/company.model");

const Job = require("./models/job.model");

const companyController = require("./controllers/company.controller");

const jobController = require("./controllers/job.controller")


app.use("/company",companyController)

app.use("/job",jobController)


app.listen(3444,async function (){
    await connect();
    console.log("listening to port no 3444")
})