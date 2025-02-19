const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (_, res) => res.send('Welcome to Space Mission Control.'));

module.exports = app;
