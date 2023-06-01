import uniqid from "uniqid";

const Todolist = ({ text }) => {
  return (
    <ul>
      {text.map((data) => (
        <li id={uniqid()} key={uniqid()}>
          {data} -- <button>X</button>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
