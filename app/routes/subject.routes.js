const express = require('express');
const Router = express.Router();

const SubjectController = require('../controller/subject.controller');

Router.get('/', function (req, res) {

    SubjectController.get().then((data)=>{
        res.status(data.status).send(data.message);
    }).catch((err)=>{
        res.status(err.status).send(err.message);
    });

});

Router.get('/subjects/:id', function (req, res) {

    SubjectController.getOne(req.params.id).then((data)=>{
        res.status(data.status).send(data.message);
    }).catch((err)=>{
        res.status(err.status).send(err.message);
    });

});

Router.post('/add', function (req, res) {

    SubjectController.insert(req.body).then((data)=>{
        res.status(data.status).send(data.message);
    }).catch((err)=>{
        res.status(err.status).send(err.message);
    });

});

module.exports = Router;