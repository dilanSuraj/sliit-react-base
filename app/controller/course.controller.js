const mongoose = require('mongoose');

const CourseSchema = require('../model/Course.model');

var CourseController = function () {

    this.insert = function (courseData) {

       return new Promise(function (resolve, reject) {

           var course = new CourseSchema({

               name: courseData.pName,
               code: courseData.pCode,
               lectureInCharge: courseData.pLectureInCharge,
               passMark: courseData.pPassMark,
               subjects: courseData.pSubjects
           });

           course.save().then(function (data) {
                 resolve(
                     {
                         status:200,
                         message:'Added Successfully '+ data
                     }
                 );


           }).catch(function (err) {

               reject(
                   {
                       status:500,
                       message:'Error Occurred '+ err
                   }
               );

           })
       }).catch((err)=>{
           console.log('Error occurred '+err);
       })



    };

    this.get = function () {

        return new Promise(function (resolve, reject) {

            CourseSchema.find().exec().then((data) =>{

                resolve({
                    status: 200,
                    message: data
                });

            }).catch((err) =>{
                reject({
                    status: 500,
                    message: err
                });
            })

        })

    };

    this.getOne = function (courseCode) {

        return new Promise(function (resolve, reject) {

            CourseSchema.find({code: courseCode}).exec().then((data) =>{

                resolve({
                    status: 200,
                    message: data
                });

            }).catch((err) =>{
                reject({
                    status: 500,
                    message: err
                });
            })

        })

    };

    this.getSubjectDetails = function (courseCode) {

        return new Promise(function (resolve, reject) {

            CourseSchema.find({code: courseCode}).populate('subjects').exec().then((data) =>{

                resolve({
                    status: 200,
                    message: data
                });

            }).catch((err) =>{
                reject({
                    status: 500,
                    message: err
                });
            })

        })

    }

};

module.exports = new CourseController();
