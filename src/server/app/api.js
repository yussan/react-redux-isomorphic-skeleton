#!/usr/bin/env node
var express = require('express')
var router = express.Router()

// midlewares
import {dirrectRequest, apiCaller} from './middlewares/api'

router.use('*', dirrectRequest, apiCaller)

export default router