import Inputwindow from "./components/Inputwindow";
import Todolist from "./components/Todolist";
import classes from "./styles/App.module.css";
import { TaskProvider } from "./taskConext";

function App() {

  // function addHandler(text, nextId) {
  //   dispatch({
  //     type: "add",
  //     id: nextId,
  //     text: text,
  //   });
  // }

  // function changeHandler(task) {
  //   dispatch({
  //     type: "change",
  //     task: task,
  //   });
  // }
  // function deleteHandler(id) {
  //   dispatch({
  //     type: "delete",
  //     id: id,
  //   });
  // }

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
