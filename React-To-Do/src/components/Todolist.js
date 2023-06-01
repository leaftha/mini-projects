import TodoItem from "./TodoItem";

const Todolist = ({ delet, text }) => {
  return (
    <ul>
      {text.map((data) => (
        <TodoItem onDelet={delet} key={data.id} id={data.id}>
          {data.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todolist;
