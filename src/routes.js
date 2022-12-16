const express = require("express");

const homeController = require("./controllers/homeController.js");
const aboutController = require("./controllers/aboutController.js");
const createController = require("./controllers/createController.js");

const router = express.Router();

router.get('/', homeController.index)

router.get("/about", aboutController.about)

router.get("/create", createController.create)

module.exports = router;