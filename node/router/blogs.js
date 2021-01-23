const express = require("express");
const blogController = require("../Controller/bolgs");
const Router = express.Router();
Router.get("/blogs", blogController.getBlogs);
Router.get("/", blogController.getBlogs);
Router.post("/add-blogs", blogController.addBlogs);
module.exports = Router;
