require('dotenv').config();
const express = require('express'), path = require("path");

global.appName = 'A simple logger Application';
global.appRoot = path.resolve(__dirname);

const app = express();
const port = process.env.PORT || 5000;
const appRouter = require('./server/api');

app.use("/user", appRouter);

app.listen(port, () =>
	console.log(`[${appName}]: Node Development Server is listening on localhost:${port}, open your browser on: http://localhost:${port}/`)
);

