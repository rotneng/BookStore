const mongoose = require("mongoose")
const express=require('express');
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(express.json())