/* 
IFT 598 - Middleware Programming - Nikita Goel
*/
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ToDoSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter name of the task'
    },
    createdDate: {
        type: Date, 
        default: Date.now
    },
    status: {
        type: String, 
        default: 'pending'
    }
});

module.exports = mongoose.model('Tasks', ToDoSchema);
