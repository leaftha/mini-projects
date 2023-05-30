import classes from "../styles/Inputwindow.module.css";

const Inputwindow = () => {
  return (
    <form>
      <input className={classes.input} type="text" />
      <button>Add</button>
    </form>
  );
};

export default Inputwindow;
