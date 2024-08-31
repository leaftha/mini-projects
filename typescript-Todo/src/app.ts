const addBtn = document.querySelector(".addBtn") as HTMLButtonElement;
const todoForm = document.querySelector(".todo-Form") as HTMLFormElement;
const todoInput = document.querySelector(".todo-Input") as HTMLInputElement;
const todoUl = document.querySelector(".todo-Ul") as HTMLElement;

interface TodoType {
  id: number;
  text: string;
  worked: boolean;
}

const list: [] = [];

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
  const deleteBtn = document.createElement("button");
  newTitle.textContent = todo.text;
  deleteBtn.textContent = "X";
  check.type = "checkbox";
  check.addEventListener("change", () => {
    console.log("check");
    todo.worked = !todo.worked;

    if (todo.worked) {
      newTitle.classList.add("worked");
    } else {
      newTitle.classList.remove("worked");
    }
  });

  deleteBtn.addEventListener("click", () => {
    todoUl.removeChild(newLi);
  });
  newLi.append(newTitle, check, deleteBtn);
  todoUl.append(newLi);

  todoInput.value = "";
}

todoForm.addEventListener("submit", addHandler);
console.log(list);
