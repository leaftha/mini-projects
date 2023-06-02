import { useState } from "react";
import classes from "../styles/Inputwindow.module.css";

const Inputwindow = ({ updata }) => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHanler = (e) => {
    e.preventDefault();
    if (input === "") return;
    updata(input);
    setInput("");
  };
  return (
    <form className={classes.form} onSubmit={submitHanler}>
      <input
        className={classes.input}
        type="text"
        onChange={inputHandler}
        value={input}
      />
      <button>Add</button>
    </form>
  );
};

export default Inputwindow;
