#!/usr/bin/env node

import React from "react"
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router"
import { Provider } from "react-redux"
import { renderRoutes, matchRoutes } from "react-router-config"
import Helmet from "react-helmet"
import routes from "../../client/routes"
import store from "../../config/store"
import webpackAssets from "../../config/webpack-assets"
import Loadable from "react-loadable"

export default function handleRender(req, res, next) {
  let html,
    context = {}

  // dettect static function fetchData in container target
  const promises = matchRoutes(routes, req.url).map(({ route, match }) => {
    let fetchData = route.component.fetchData
    return fetchData instanceof Function
      ? fetchData(store, match.params, match.query)
      : Promise.resolve()
  })

  return Promise.all(promises).then(() => {
    // return respond html as string from react-dom-server
    // ref loadable: https://github.com/jamiebuilds/react-loadable#finding-out-which-dynamic-modules-were-rendered
    html = ReactDOMServer.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={req.url} context={context}>
          <Provider store={store}>{renderRoutes(routes)}</Provider>
        </StaticRouter>
      </Loadable.Capture>
    )
    if (context.url) {
      res.status(500).end("internal server error")
    } else {
      //render html + preloaded state
      res.end(renderHtml(html, store.getState()))
    }
  })
}

// wrapper of render HTML
function renderHtml(body = "", preloadedState = {}) {
  const head = Helmet.rewind()
  return `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
      </head>
      <body>
        <div id="app">${body}</div>
        <script>
          window.__data__ = ${JSON.stringify(preloadedState)};
        </script>
        <script src="${webpackAssets.vendor.js}"></script>
        <script src="${webpackAssets.app.js}"></script>
      </body>
    </html>
  `.replace(/\s\s+/g, "")
}
