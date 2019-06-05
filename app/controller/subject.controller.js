const mongoose = require('mongoose');
const SubjectSchema = require('../model/Subject.model');

var SubjectController = function(){


    this.insert = function (subjectData) {

        return new Promise(function (resolve, reject) {

            var subject = new SubjectSchema({

                name: subjectData.pName,
                description: subjectData.pDescription,
                amount: subjectData.pAmount
            });

            subject.save().then(function (data) {
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

            SubjectSchema.find().exec().then((data) =>{

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

    this.getOne = function (subject_id) {

        return new Promise(function (resolve, reject) {

            SubjectSchema.find({_id: subject_id}).exec().then((data) =>{

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

};

module.exports = new SubjectController();
