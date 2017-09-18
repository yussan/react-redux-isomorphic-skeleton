import request from 'request'
import {objToQuery} from 'string-manager'
import fs from 'fs'
import httpException from '../../../config/httpException'

/**
 * function to get data from API
 * @params (string) method, (string) endpoint, (object) params
 */
export default function requestAPI(method='GET', endpoint='', params={})
{
    return new Promise((resolve, reject) => {
        //set query
        if(params.query)
        {
            endpoint = `${endpoint}?${objToQuery(params.query)}`
            delete params.query
        }

        //set options
        var options = {
            method,
            uri: `${process.env.API_HOST}${endpoint}`,
            timeout: 30000,
            headers: {
                'User-Agent' : 'Sebangsa/0.1'
            },
        }

        // using POST method
        if(method.toLowerCase() === 'post') {
            options.formData = params

            // upload files from input file
            if(options.formData.files)
            {
                const {files} = options.formData
                delete options.formData.files

                Object.keys(files).map(n => {
                    options.formData[n] = {
                        value: fs.createReadStream(files[n]._writeStream.path),
                        options: {
                            filename: files[n].name,
                            type: files[n].type
                        }
                    }
                })
            }
        }

        //start request
        try {
            request( options , (error, response, body) => {
                if(error)
                {
                    return resolve(httpException(500))
                } else //success
                {
                    try{
                        let payload = JSON.parse(body)
                        if(payload.constructor === Array) //response as array []
                        {
                            let nextpayload = {}
                            nextpayload.result = payload 
                            payload = {}
                            payload = nextpayload
                        }
                        if(!payload.status) 
                            payload.status = response.statusCode //added status in response
                        return resolve(payload)
                    }catch(e)
                    {
                        console.log('--- \n error: ' + e + '\n---')
                        return resolve(httpException(500))
                    }
                }
            })
        } catch(err) {
            return resolve(httpException(500, err.message+', '+err.stack))
        }
    })
}