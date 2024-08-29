"use strict";
var addBtn = document.querySelector(".addBtn");
var todoForm = document.querySelector(".todo-Form");
var todoInput = document.querySelector(".todo-Input");
var todoUl = document.querySelector(".todo-Ul");
var list = [];
function addHandler(e) {
    e.preventDefault();
    var todo = {
        id: Math.random(),
        text: todoInput.value,
        worked: false,
    };
    var newLi = document.createElement("li");
    var newTitle = document.createElement("h1");
    var check = document.createElement("input");
    newTitle.textContent = todo.text;
    check.type = "checkbox";
    check.addEventListener("change", function () {
        console.log("check");
        todo.worked = !todo.worked;
        if (todo.worked) {
            newTitle.classList.add("worked");
        }
        else {
            newTitle.classList.remove("worked");
        }
    });
    newLi.append(newTitle, check);
    todoUl.append(newLi);
    todoInput.value = "";
}
todoForm.addEventListener("submit", addHandler);
console.log(list);
//# sourceMappingURL=app.js.map