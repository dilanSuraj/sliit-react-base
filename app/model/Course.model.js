const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({

    name:{
        type: String
    },
    code :{
        type: String
    },
    lectureInCharge:{
        type: String
    },
    passMark:{
        type: Number
    },
    subjects:[
        {
            type: Schema.Types.ObjectId,
            ref:'Subject'
        }
    ]

});

module.exports = mongoose.model('Course', Course);

