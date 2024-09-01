"use strict";
var addBtn = document.querySelector(".addBtn");
var todoForm = document.querySelector(".todo-Form");
var todoInput = document.querySelector(".todo-Input");
var todoUl = document.querySelector(".todo-Ul");
var list = [];
function renderList() {
    todoUl.innerHTML = "";
    list.forEach(function (todo) {
        var newLi = document.createElement("li");
        var newTitle = document.createElement("h1");
        var check = document.createElement("input");
        var deleteBtn = document.createElement("button");
        newTitle.textContent = todo.text;
        deleteBtn.textContent = "X";
        check.type = "checkbox";
        check.checked = todo.worked;
        if (todo.worked) {
            newTitle.classList.add("worked");
        }
        check.addEventListener("change", function () {
            todo.worked = !todo.worked;
            renderList();
        });
        deleteBtn.addEventListener("click", function () {
            list.splice(list.indexOf(todo), 1);
            renderList();
        });
        newLi.append(newTitle, check, deleteBtn);
        todoUl.append(newLi);
    });
}
function addHandler(e) {
    e.preventDefault();
    if (todoInput.value.trim() === "") {
        alert("Todo 내용을 입력하세요!");
        return;
    }
    var todo = {
        id: Date.now(),
        text: todoInput.value,
        worked: false,
    };
    list.push(todo);
    renderList();
    todoInput.value = "";
}
todoForm.addEventListener("submit", addHandler);
//# sourceMappingURL=app.js.map