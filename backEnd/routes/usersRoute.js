const express = require('express');
const  getUser  = require('../controllers/userController');
const route = express.Router();


route.route('/users')
    .get(getUser.getUser)
    .post(getUser.storeUser)

route.route('/login')
    .post(getUser.loginUser)


module.exports = route;