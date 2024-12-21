const express = require('express');
const appConfig = require('./src/configs/config.constants');
const app = express()

app.listen(appConfig.port,()=>{
    console.log(`Server is runing at ${appConfig.port}`)
})

