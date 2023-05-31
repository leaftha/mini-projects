import TodoItem from "./TodoItem";

const Todolist = ({ text }) => {
  console.log(text);
  return (
    <ul>
      {text.map((data) => (
        <TodoItem>{data}</TodoItem>
      ))}
    </ul>
  );
};

export default Todolist;
