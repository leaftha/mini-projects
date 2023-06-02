import TodoItem from "./TodoItem";

import classes from "../styles/Todolist.module.css";

const Todolist = ({ delet, text }) => {
  return (
    <ul className={`${classes.ul} ${text.length === 0 ? "" : classes.item}`}>
      {text.map((data) => (
        <TodoItem onDelet={delet} key={data.id} id={data.id}>
          {data.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todolist;
