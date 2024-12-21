const dotenv = require('dotenv')
dotenv.config()
const appConfig = {
    port:process.env.PORT || 3000
}

module.exports = appConfig