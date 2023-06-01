const TodoItem = ({ id, onDelet, children }) => {
  const DeletHandler = () => {
    return onDelet(id);
  };
  return (
    <li key={id}>
      {children} -- <button onClick={DeletHandler}>X</button>
    </li>
  );
};
export default TodoItem;
