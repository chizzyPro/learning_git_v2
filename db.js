const mongoose = require('mongoose')
const mongoURL = require('../config/config.env')

module.export = mongoose.connect(mongoURL, {
userNewUrlParser:true,
userMongoClient:true
})


