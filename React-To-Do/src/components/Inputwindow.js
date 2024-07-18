import { useState } from "react";
import classes from "../styles/Inputwindow.module.css";
import uniqid from "uniqid";

const Inputwindow = ({ onAdd }) => {
  const [text, setText] = useState("");
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
          onAdd(text, uniqid());
        }}
      >
        Add
      </button>
    </>
  );
};

export default Inputwindow;
