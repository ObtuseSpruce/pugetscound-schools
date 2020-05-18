import * as mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/school')

module.exports.Class = require('./class')
module.exports.User = require('./user')
module.exports.Assignement = require('./assignment')