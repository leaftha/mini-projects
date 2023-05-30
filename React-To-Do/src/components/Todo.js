import classes from "../styles/Todo.module.css";
import Inputwindow from "./Inputwindow";
import Todolist from "./Todolist";

const Todo = () => {
  return (
    <div className={classes.body}>
      <h1>React ToDo App</h1>
      {Inputwindow()}
      {Todolist()}
    </div>
  );
};

export default Todo;
