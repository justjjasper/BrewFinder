require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));



var router = require('./PostgreSQL/routeSQL.js');

app.use('/brewery', router);

app.listen(process.env.PORT);
console.log(`You are listening to ${process.env.PORT}`);