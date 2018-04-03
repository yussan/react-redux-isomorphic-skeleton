#!/usr/bin/env node
var express = require('express')
var router = express.Router()

// midlewares
import { dirrectRequest, apiCaller } from './middlewares/api'

router.get('/test', testHandler)
router.use('*', dirrectRequest, apiCaller)

// test purpose
function testHandler(req, res, next) {
  res.end('ready player 1')
}

export default router