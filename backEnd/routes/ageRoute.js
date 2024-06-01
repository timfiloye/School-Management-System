const express = require('express');
const getAge = require("../controllers/ageController")
const route = express.Router();

route.get('/users', getAge);

module.exports = route;