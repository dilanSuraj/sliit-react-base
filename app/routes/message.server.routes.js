const express = require('express');

const Router = express.Router();

Router.get('/', function (req, res) {
    res.json({message: 'Welcome to e-Course'});
});

module.exports = Router;
