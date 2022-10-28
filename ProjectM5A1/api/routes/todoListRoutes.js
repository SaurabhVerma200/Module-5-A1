/* 
IFT 598 - Middleware Programming - Nikita Goel
*/
'use strict';

module.exports = function(app) {
    var todoList = require('../controllers/todoController'),
        userHandlers = require('../controllers/userController');
    
    // todo routes 
    app.route('/tasks')
        .get(todoList.getAlltask)
        .post(userHandlers.loginRequired, todoList.createTask);
    
    app.route('/tasks/:taskId')
        .get(todoList.getTask)
        .put(todoList.updateTask)
        .delete(todoList.deleteTask);

    app.route('/auth/register')
        .post(userHandlers.register);
    
    app.route('/auth/sign_in')
        .post(userHandlers.sign_in);
};