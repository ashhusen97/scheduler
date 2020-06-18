/* eslint-disable prettier/prettier */
// imports

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const bodyParser = require('body-parser');
const {mongoURL} = require('./keys');

require('./models/User');

const authRoutes = require('./routes/authRoutes');
app.use(bodyParser.json());
app.use(authRoutes);

// mongo connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('connected to mongo yeah');
});

// routes

app.listen(PORT, () => {
  console.log('running on ' + PORT);
});
