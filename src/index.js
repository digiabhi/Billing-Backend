const express = require('express')

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const {urlencoded} = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully Started Server on PORT: ${ServerConfig.PORT}`)
});
