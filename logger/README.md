# Logger Application

SheCode biweekly learning roadmap - A dummy API infrastructure (with no Database, ORM or ODM connection) to show how
Logging and Monitoring works in NodeJs.

A transaction log is a file (i.e., log) of the communications between a system and the users of that system,

[2] or a data collection method that automatically captures the type, content, or time of transactions made by a person
from a terminal with that system.

[3] For Web searching, a transaction log is an electronic record of interactions that have occurred during a searching
episode between a Web search engine and users searching for information on that Web search
engine.([Reference: Wikipedia](https://en.wikipedia.org/wiki/Logging_(software)#:~:text=In%20computing%2C%20a%20log%20file,to%20a%20single%20log%20file.)
.)

## Available Scripts

Run `node app.js` or `npm start` or `nodemon` ( that is,`nodemon`) for a dev server. Navigate
to [http://localhost:5000](http://localhost:5000).

Important Note:
The app will automatically reload if you run `nodemon` or `npm start` (I have configured this command to help run
nodemon as my development server) when you change any of the source files.

The application won't automatically reload if you run `node app.js`, so, ensure to stop the application using `ctrl + c`
then re-run `node app.js`

## How to use

I have inserted a dummy dataset (static data) to help test how logger works.
I have three record with unique identifier of 1-3 respectively

- Run the application with the aforementioned instruction on `Available Scripts`
- On an API testing platform, insert baseURL [http://localhost:5000](http://localhost:5000)
- add an endpoint of `/user` such that you have [http://localhost:5000/user](http://localhost:5000/user to get all users
- or add a specific parameter to get a particular user (a valid or invalid parameter will do as both has been handled).
- in my codebase, navigate to server => logs => app.log or error.log to see application log.