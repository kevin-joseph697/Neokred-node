const {marked} = require('marked')
const convertToHtml = async(req,res)=>{
    try{
        const {content} = req.body
        if(!content){
            res.status(400).send({
                message:'content is not available'
            })
        }
        const html = marked(content)
        res.send({
            message:html
        })
    }catch(err){
        throw err
    }
}

module.exports = {
    convertToHtml
}