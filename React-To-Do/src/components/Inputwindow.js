import { useContext, useState } from "react";
import classes from "../styles/Inputwindow.module.css";
import uniqid from "uniqid";
import { DispatchContext } from "../taskConext";

const Inputwindow = ({ onAdd }) => {
  const [text, setText] = useState("");
  const dispatch = useContext(DispatchContext)
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "add",
            id : uniqid(),
            text: text,
          })
        }}
      >
        Add
      </button>
    </>
  );
};

export default Inputwindow;
