const addBtn = document.querySelector(".addBtn") as HTMLButtonElement;
const todoForm = document.querySelector(".todo-Form") as HTMLFormElement;
const todoInput = document.querySelector(".todo-Input") as HTMLInputElement;

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
  todoInput.value = "";
  console.log(todo);
}

todoForm.addEventListener("submit", addHandler);
