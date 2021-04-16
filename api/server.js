const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();


server.use(express.json());
server.use(helmet());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/task', taskRouter);


server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;


