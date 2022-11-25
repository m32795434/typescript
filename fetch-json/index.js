"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/2';
var axiosResp = axios_1["default"].get(url);
console.log(axiosResp);
axios_1["default"].get(url).then(function (response) {
    console.log(response);
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n    The todo with id: ".concat(id, " \n    has a title of ").concat(title, "\n    Is it finished?: ").concat(completed, "\n    "));
};
