require('dotenv').config()
const { env } = process
const defaultConf = require('./webpack/default')
const productionConf = require('./webpack/production')

let Config = defaultConf

if(env.NODE_ENV === 'production') Config.plugins.push(productionConf)

module.exports = Config
