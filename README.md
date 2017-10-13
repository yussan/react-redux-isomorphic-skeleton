
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# React Redux Isomorphic Boilerplate
Isomorphic apps, built using base of Express, ReactJS and Redux. This allowing to run server rendering and server request.

<div style="text-align:center">
<img src="https://pbs.twimg.com/media/DL56FSWVoAA-BUA.jpg:large" />
</div>

## About Isomorphic Javascript
applications are applications written in JavaScript that can run both on the client and on the server. Written on top of Node.js, that focuses on real-time web applications. More https://www.sitepoint.com/isomorphic-javascript-applications/

## Life Cycle
* ### First load (server rendering and request data)
    When user open web page, [ReactRouter](https://github.com/ReactTraining/react-router) start to matching `req.url` and available routes. [ReactJS](reactjs.org) will render and request data on server along with rendering of [ExpressJS](reactjs.org).
* ### Page transition (transition and ajax)
    After first load, user most likely will move to other page with link that exist. In this event [ReactRouter](https://github.com/ReactTraining/react-router) will handle it, and [ReactJS](reactjs.org) start request data via ajax using [Superagent](https://visionmedia.github.io/superagent/)

## Getting Started
* ### Prerequisites
    * [NodeJS](https://nodejs.org/en/download/) 
    * NPM (should already be one with nodejs)
    * [Yarn (recommended to replace NPM,optional)](https://yarnpkg.com), all yarn commands below can be changed using npm
* ### Clone 
    Please clone this repo to your local.
* ### Instalation 
    ```
    yarn install
    ```
* ### Start for development 
    You have run 2 commands for it :
    Run server 
    ```
    yarn start
    ```
    Run client build 
    ```
    yarn webpack
    ```
* ### Open in browser
    Access [http://localhost:18080](http://localhost:18080), or according to your configuration in `.env`.

## Used By 
* [https://kompetisi.id](https://kompetisi.id) Indonesian Online Competition Platform.
