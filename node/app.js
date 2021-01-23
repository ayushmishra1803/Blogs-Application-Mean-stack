const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./router/blogs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);
app.listen(3000);
