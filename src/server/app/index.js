#!/usr/bin/env node

import express from 'express'
import path from 'path'
import os from 'os'
import api from './api'
import render from './render'
import defaultConf from '../../config/app'

const app = express()
let staticOptions = {}

app.disabled('x-powered-by')

// global midleware
app.use((req, res, next) => {
  // log
  const debugReq = require('debug')('app:req')
  debugReq(`${req.method} ${req.originalUrl} at ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}`)
  next()
})

// routes
app.use('/api', api)
app.use('/assets', express.static(path.resolve(__dirname + '/../../../assets'), staticOptions))
app.use('/', render)

export default app