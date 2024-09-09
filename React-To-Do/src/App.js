import { useEffect } from "react";
import Inputwindow from "./components/Inputwindow";
import Todolist from "./components/Todolist";
import classes from "./styles/App.module.css";
import { TaskProvider } from "./taskConext";

function App() {

  return (
      <TaskProvider>
         <div className={classes.body}>
          <h1>React ToDo App</h1>
          <Inputwindow  />
          <Todolist />
        </div>
      </TaskProvider>
  
  );
}



export default App;
