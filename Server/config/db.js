const mongoose =  require('mongoose');

var express = require('express');
const app = express();

const uri = "mongodb://localhost:27017";

mongoose.set('strictQuery', false);

const connect = mongoose.connect(uri)
.then(()=>{
    console.log("connected to mongoDB")
})
.catch((error)=>{
    console.log(error)
})
module.exports= {connect};