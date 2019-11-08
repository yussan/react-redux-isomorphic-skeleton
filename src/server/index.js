#!/usr/bin/env node

import app from "./app/index"
import http from "http"
import Loadable from "react-loadable"

const port = process.env.APP_PORT || 2018
app.set("port", port)

// production configuration
if (process.env.NODE_ENV == "production") {
  // gzip compression
  const compression = require("compression")
  app.use(compression())
}

// start the server
const server = http.createServer(app)
// ref Loadable: https://github.com/jamiebuilds/react-loadable#preloading-all-your-loadable-components-on-the-server
Loadable.preloadAll().then(() => {
  server.listen(port)
  server.on("error", onError)
  server.on("listening", onListening)
})

function onError(error) {
  if (error.syscall !== "listen") {
    throw error
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.log("--- \n" + bind + " requires elevated privileges \n---")
      process.exit(1)
      break
    case "EADDRINUSE":
      console.log(
        "--- \n" + bind + " is already in use by another program \n---"
      )
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening() {
  const addr = server.address()
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port
  console.log("--- \n Cermin Web is listening on " + bind + " \n---")
}
