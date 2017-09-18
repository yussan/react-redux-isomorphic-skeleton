#!/usr/bin/env node

import app from './app/index'
import http from 'http' 
import cluster from 'cluster'
import os from 'os'

const port = process.env.APP_PORT || 18080
app.set('port', port)

// production configuration
if(process.env.NODE_ENV == 'production')
{
  // gzip compression
  const compression = require('compression')
  app.use(compression())
  // static file caching
  staticOptions = defaultConf.caching
}

// clustering
if(cluster.isMaster && process.env.NODE_ENV == 'production')
{
    const NumWorkers = os.cpus().length
    console.log('--- \n Master cluster setting up ' + NumWorkers + ' workers \n---')
    for(var i = 0; i < NumWorkers; i++)
    {
        cluster.fork()
    }

    cluster.on('online', worker => {
        console.log('--- \n Worker ' + worker.process.pid + ' is online \n---')
    })

    cluster.on('exit', (worker, code, signal) => {
        console.log('--- \n Worker ' + worker.process.pid + ' died with code '+code+' and signal '+signal+' \n---')
        console.log('--- \n starting new worker \n---')
        cluster.fork()
    })
}
else
{
    const server = http.createServer(app)
    server.listen(port)
    server.on('error', onError)
    server.on('listening', onListening)

    function onError(error){
      if (error.syscall !== 'listen') {
          throw error
      }
      const bind = typeof port === 'string'
          ? 'Pipe ' + port
          : 'Port ' + port
    
      // handle specific listen errors with friendly messages
      switch (error.code) {
          case 'EACCES':
              console.log('--- \n' + bind + ' requires elevated privileges \n---')
              process.exit(1)
              break
          case 'EADDRINUSE':
              console.log('--- \n' + bind + ' is already in use by another program \n---')
              process.exit(1)
              break
          default:
              throw error
      }
    }
    
    function onListening() {
      const addr = server.address()
      const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
      console.log('--- \n Cermin Web is listening on ' + bind + ' \n---')
    }
}