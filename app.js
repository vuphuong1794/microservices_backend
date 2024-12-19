const express = require("express");
const app = express();
const moneyRouter = require("./routes/money.router");

app.use(express.json());
app.use('/', moneyRouter);

module.exports = app;