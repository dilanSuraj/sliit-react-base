const express = require('express');
const Router = express.Router();

const CourseController = require('../controller/course.controller');

Router.get('/', function (req, res) {

     CourseController.get().then((data)=>{
         res.status(data.status).send({message:data.message});

     }).catch((err)=>{
         res.status(err.status).send(err.message);
     });

});

Router.get('/:id', function (req, res) {

    CourseController.getSubjectDetails(req.params.id).then((data)=>{
        res.status(data.status).send(data.message);
    }).catch((err)=>{
        res.status(err.status).send(err.message);
    });

});

Router.post('/add', function (req, res) {

    CourseController.insert(req.body).then((data)=>{
        res.status(data.status).send(data.message);
    }).catch((err)=>{
        res.status(err.status).send(err.message);
    });

});

module.exports = Router;