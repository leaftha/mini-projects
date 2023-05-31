import { useState } from "react";
import classes from "../styles/Todo.module.css";
import Inputwindow from "./Inputwindow";
import Todolist from "./Todolist";
import uniqid from "uniqid";

const Todo = () => {
  const [text, setText] = useState([]);
  const upinputData = (data) => {
    setText((prev) => {
      return [data, ...prev];
    });
  };

  return (
    <div className={classes.body}>
      <h1>React ToDo App</h1>
      <Inputwindow updata={upinputData} />
      <Todolist key={uniqid()} text={text} />
    </div>
  );
};

export default Todo;
