require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');
const compression = require('compression');
const { router } = require('./controller/index');

const PORT = process.env.PORT || 3000;
app.disable('x-powered-by');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);
module.exports = {
  app,
  PORT,
};
