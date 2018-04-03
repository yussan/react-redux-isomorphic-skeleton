import request from '../modules/api'
import formidable from 'formidable'

// generate request data
export function dirrectRequest(req, res, next)
{
    req.reqdata = {
        method: req.method,
        endpoint: req.originalUrl.replace('/api', ''),
        params: req.params
    }

    // parse formdata
    if(req.method != 'GET') // POST, PUT, DELETE, ...
    {
        const form = new formidable.IncomingForm()
        form.parse(req, (err, params, files) => {
            params.files = files
            req.reqdata.params = Object.assign({}, req.params, params)
            next()
        })
    } else {
        next()
    }
}

// api caller
export function apiCaller(req, res)
{
    const debugApiReq = require('debug')('app:api-req')
    const debugApiRes = require('debug')('app:api-res')
    const { method, endpoint, params} = req.reqdata

    // log
    debugApiReq(`${method} ${endpoint} at ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}`)
    return request(method, endpoint, params).then(response => {
        // log 
        debugApiRes(`${method} ${endpoint} ${response} at ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}`)
        res.json(response)
    })
}