const express = require('express');
const uploadRouter = require('./server/upload.router');

const port = 5000;
const app = express();

global.appName = 'file Upload Application';

app.use('/', uploadRouter);

app.listen(port, () =>
  console.log(`[${appName}]: Node Development Server is listening on localhost:${port}, open your browser on: http://localhost:${port}/`)
);
