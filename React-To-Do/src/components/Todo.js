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

  const deletHandler = (id) => {
    setText((prev) => {
      const updataData = prev.filter((text) => text.id !== id);
      return updataData;
    });
  };

  return (
    <div className={classes.body}>
      <h1>React ToDo App</h1>
      <Inputwindow updata={upinputData} />
      <Todolist delet={deletHandler} text={text} />
    </div>
  );
};

export default Todo;
