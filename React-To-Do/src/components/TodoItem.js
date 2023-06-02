import classes from "../styles/TodoItem.module.css";

const TodoItem = ({ id, onDelet, children }) => {
  const DeletHandler = () => {
    return onDelet(id);
  };
  return (
    <li className={classes.li} key={id}>
      {children} <button onClick={DeletHandler}>X</button>
    </li>
  );
};
export default TodoItem;
