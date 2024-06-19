const connect = require('./config/db');
const bodyParser = require('body-parser');
const accountUtils = require('./utils/account');
// server.js

const express = require('express');
const app = express();
const port = 2101;
const ip = "192.168.1.5";

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Example endpoint
// app.get('/test', accountUtils.test);

app.get('/', (req, res) => {
  res.send('Welcome to my Node.js server!');
});

app.post('/user/register', accountUtils.register);
app.post('/user/signin', accountUtils.login);

// Start the server
app.listen(port, ip, () => {
  console.log(`Server is running on http://${ip}:${port}`);
});
