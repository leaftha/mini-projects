const TodoItem = ({ key, children }) => {
  console.log(key);
  return (
    <li>
      {children} - <button>X</button>
    </li>
  );
};

export default TodoItem;
