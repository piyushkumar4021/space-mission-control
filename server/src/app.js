const express = require('express');
const cors = require('cors');
const app = express();
const planetsRouter = require('./routes/planets/planets.router');

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/', (_, res) => res.send('Welcome to Space Mission Control.'));

app.use('/planets', planetsRouter);

module.exports = app;
