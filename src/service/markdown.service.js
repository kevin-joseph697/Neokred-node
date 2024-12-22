const {marked} = require('marked')
const convertToHtml = async(req,res)=>{
    try{
        const {content} = req.body
        if(!content){
          return res.status(400).send({
                message:'content is not available'
            })
        }
        const html = await marked(content)
        res.send({
            result:html
        })
    }catch(err){
        throw err
    }
}

module.exports = {
    convertToHtml
}