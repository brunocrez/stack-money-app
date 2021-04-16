const PORT = process.env.PORT;

const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./cors');
const queryParser = require('express-query-int');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());

server.listen(PORT, () => console.log(`BACKEND RUNNING ON PORT ${PORT}!`));

module.exports = server;