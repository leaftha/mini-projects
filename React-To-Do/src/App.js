import React from "react";
import Todo from "./components/Todo";

import classes from "./styles/App.module.css";

function App() {
  return <div className={classes.body}>{Todo()}</div>;
}

export default App;
