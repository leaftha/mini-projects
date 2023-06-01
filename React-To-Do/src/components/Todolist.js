const Todolist = ({ text }) => {
  const deletHandler = () => {};
  return (
    <ul>
      {text.map((data) => (
        <li key={data.id}>
          {data.text} -- <button onClick={deletHandler}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
