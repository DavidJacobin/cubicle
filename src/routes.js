const express = require("express");

const homeController = require("./controllers/homeController.js");
const aboutController = require("./controllers/aboutController.js");
const createController = require("./controllers/createController.js");

const router = express.Router();

router.use(homeController)

router.use(aboutController)

router.use(createController)

module.exports = router;