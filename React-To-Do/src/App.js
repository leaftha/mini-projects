import React, { useReducer } from "react";
import Inputwindow from "./components/Inputwindow";
import Todolist from "./components/Todolist";
import classes from "./styles/App.module.css";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  function addHandler(text, nextId) {
    dispatch({
      type: "add",
      id: nextId,
      text: text,
    });
  }

  function changeHandler(task) {
    dispatch({
      type: "change",
      task: task,
    });
  }
  function deleteHandler(id) {
    dispatch({
      type: "delete",
      id: id,
    });
  }

  console.log(tasks);
  return (
    <div className={classes.body}>
      <h1>React ToDo App</h1>
      <Inputwindow onAdd={addHandler} />
      <Todolist
        tasks={tasks}
        onDelete={deleteHandler}
        onChange={changeHandler}
      />
    </div>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "change": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "delete": {
      return tasks.filter((i) => i.id !== action.id);
    }
    default: {
      throw Error("Unknown action");
    }
  }
}

export default App;
