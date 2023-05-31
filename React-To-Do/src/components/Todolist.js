import TodoItem from "./TodoItem";

const Todolist = ({ key, text }) => {
  console.log(text);
  return (
    <ul>
      {text.map((data) => (
        <TodoItem key={key}>{data}</TodoItem>
      ))}
    </ul>
  );
};

export default Todolist;
