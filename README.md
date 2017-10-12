# Aoi [WIP Project]
Aoi is a framework for isomorphic apps. Built using base of Express and ReactJS. This framework allowing to run server rendering and server request using React JS codes.

<div style="text-align:center">
![React Redux Isomorphic App](https://pbs.twimg.com/media/DL56FSWVoAA-BUA.jpg:large)
</div>

## About Isomorphic Javascript
applications are applications written in JavaScript that can run both on the client and on the server. ... Meteor is an open-source JavaScript framework, written on top of Node.js, that focuses on real-time web applications. More https://www.sitepoint.com/isomorphic-javascript-applications/

## Instalation 

Please install `aoi` as global command.
```
yarn global add aoi
```
or
```
npm install -g aoi
```

## Create new project
Execute this command into your terminal

```
$aoi create my-project-name
```

Then automatically create a new directory as your project name. That is where you will work.

## Contribution

### Setup
Make sure to install NodeJS first, i recommend using LTS version. https://github.com/nodejs/LTS. Execute this command at first time to install required dependency
```
npm install
```
After that, copy and rename `.env.example` on root directory to `.env`

### Start Develop
Make sure to setup environment mode on `.env` file. Please select one `DEVELOP` or `PRODUCTION`. Execute this command to start server
```
npm run start
```
