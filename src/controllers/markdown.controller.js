const express = require('express')
const { convertToHtml } = require('../service/markdown.service')
const router = express.Router()

router.post('/convertToHtml',async(req,res)=>{
    try{
        return await convertToHtml(req,res)
    }catch(err){
        console.log(err)
        return res.status(500).send({
            message:err.message ? err.message : 'Something went wrong, please try again after sometime'
        })
    }
})

module.exports = router