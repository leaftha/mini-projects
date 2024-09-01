const addBtn = document.querySelector(".addBtn") as HTMLButtonElement;
const todoForm = document.querySelector(".todo-Form") as HTMLFormElement;
const todoInput = document.querySelector(".todo-Input") as HTMLInputElement;
const todoUl = document.querySelector(".todo-Ul") as HTMLElement;

interface TodoType {
  id: number;
  text: string;
  worked: boolean;
}

const list: TodoType[] = [];

function renderList() {
  todoUl.innerHTML = "";
  list.forEach((todo) => {
    const newLi = document.createElement("li");
    const newTitle = document.createElement("h1");
    const check = document.createElement("input");
    const deleteBtn = document.createElement("button");

    newTitle.textContent = todo.text;
    deleteBtn.textContent = "X";
    check.type = "checkbox";
    check.checked = todo.worked;

    if (todo.worked) {
      newTitle.classList.add("worked");
    }

    check.addEventListener("change", () => {
      todo.worked = !todo.worked;
      renderList();
    });

    deleteBtn.addEventListener("click", () => {
      list.splice(list.indexOf(todo), 1);
      renderList();
    });

    newLi.append(newTitle, check, deleteBtn);
    todoUl.append(newLi);
  });
}

function addHandler(e: Event) {
  e.preventDefault();

  if (todoInput.value.trim() === "") {
    alert("Todo 내용을 입력하세요!");
    return;
  }

  const todo: TodoType = {
    id: Date.now(),
    text: todoInput.value,
    worked: false,
  };

  list.push(todo);
  renderList();

  todoInput.value = "";
}

todoForm.addEventListener("submit", addHandler);
