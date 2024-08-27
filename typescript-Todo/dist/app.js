"use strict";
var addBtn = document.querySelector(".addBtn");
var todoForm = document.querySelector(".todo-Form");
var todoInput = document.querySelector(".todo-Input");
function addHandler(e) {
    e.preventDefault();
    var todo = {
        id: Math.random(),
        text: todoInput.value,
        worked: false,
    };
    todoInput.value = "";
    console.log(todo);
}
todoForm.addEventListener("submit", addHandler);
//# sourceMappingURL=app.js.map