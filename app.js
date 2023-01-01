const serverless = require('serverless-http');
const express = require('express');
const app = express();

// Double slash might be needed in offline mode: http://localhost:3000/production//
// See https://github.com/dougmoscrop/serverless-http/issues/86#issuecomment-842231137
app.get('/', async (req, res, next) => {
  res
    .status(200)
    .send('Hello World!');
});

app.get('/emre', async (req, res, next) => {
  res
    .status(200)
    .send('EMRE ROCKS!');
});

module.exports.server = serverless(app);
