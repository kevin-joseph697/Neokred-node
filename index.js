const express = require('express');
const cors = require('cors')
const appConfig = require('./src/configs/config.constants');
const markDownRouter = require('./src/controllers/markdown.controller')
const app = express()
app.use(cors())
app.use(express.json())

app.use('/markdownservice',markDownRouter)
app.listen(appConfig.port,()=>{
    console.log(`Server is runing at ${appConfig.port}`)
})

