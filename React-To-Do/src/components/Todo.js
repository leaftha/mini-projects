import { useState } from "react";
import classes from "../styles/Todo.module.css";
import Inputwindow from "./Inputwindow";
import Todolist from "./Todolist";
import uniqid from "uniqid";

const Todo = () => {
  const [text, setText] = useState([]);
  const upinputData = (data) => {
    setText((prev) => {
      const updataData = [...prev];
      updataData.unshift({ text: data, id: uniqid() });
      return updataData;
    });
  };

  return (
    <div className={classes.body}>
      <h1>React ToDo App</h1>
      <Inputwindow updata={upinputData} />
      <Todolist text={text} />
    </div>
  );
};

export default Todo;
