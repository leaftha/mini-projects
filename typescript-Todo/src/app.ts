const addBtn = document.querySelector(".addBtn") as HTMLButtonElement;
const todoForm = document.querySelector(".todo-Form") as HTMLFormElement;
const todoInput = document.querySelector(".todo-Input") as HTMLInputElement;
const todoUl = document.querySelector(".todo-Ul") as HTMLElement;

interface TodoType {
  id: number;
  text: string;
  worked: boolean;
}

function addHandler(e: Event) {
  e.preventDefault();

  const todo: TodoType = {
    id: Math.random(),
    text: todoInput.value,
    worked: false,
  };

  const newLi = document.createElement("li");
  const newTitle = document.createElement("h1");
  const check = document.createElement("input");
  newTitle.textContent = todo.text;
  check.type = "checkbox";
  newLi.append(newTitle, check);
  todoUl.append(newLi);
  todoInput.value = "";
}

todoForm.addEventListener("submit", addHandler);
