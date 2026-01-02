const express = require('express');
const app = express();
const port = 3000;

app.post('/', function(req,res){
    console.log(req.body);
})