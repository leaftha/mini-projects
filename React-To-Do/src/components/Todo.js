import { useState } from "react";
import classes from "../styles/Todo.module.css";
import Inputwindow from "./Inputwindow";
import Todolist from "./Todolist";

const Todo = () => {
  const [text, setText] = useState([]);
  const upinputData = (data) => {
    setText((prev) => {
      return [data, ...prev];
    });
  };
  console.log(text);

  return (
    <div className={classes.body}>
      <h1>React ToDo App</h1>
      <Inputwindow updata={upinputData} />
      <Todolist text={text} />
    </div>
  );
};

export default Todo;
