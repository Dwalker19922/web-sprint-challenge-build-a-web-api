const express = require('express');
const server = express();

const ActionsRouter=require('./actions/actions-router.js')
const ProjectRouter=require('./projects/projects-router')

server.use(express.json())
server.use("/api/projects",ProjectRouter)
server.use("/api/actions",ActionsRouter)
server.use((err, req, res, next) => { // eslint-disable-line
    console.log('', err.message)
    res.status(err.status || 500).json({
      custom: 'an error ocurred',
      message: err.message,
      stack: err.stack,
    })
  });
  
module.exports = server;
