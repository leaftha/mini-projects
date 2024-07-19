import classes from "../styles/Todolist.module.css";
import { useContext, useState } from "react";
import { DispatchContext, TaskContext } from "../taskConext";

export default function Todolist({  onDelete, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const tasks = useContext(TaskContext)
  const dispatch = useContext(DispatchContext)

  return (
    <ul className={classes.ul}>
      {tasks.map((task, idx) => (
        <label key={idx}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              dispatch({
                type: "change",
                task: {
                  ...task,
                  done: e.target.checked
                }
              });
            }}
          />
          {isEditing ? (
            <>
              <input
                value={task.text}
                onChange={(e) => {
                  dispatch({
                    type: "change",
                    task: {
                      ...task,
                      text: e.target.value
                    }
                  });
                }}
              />
              <button onClick={() => setIsEditing(false)}>Save</button>
            </>
          ) : (
            <>
              {task.text}
              <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
          )}
          <button onClick={() => {
            dispatch({
              type : "delete",
              id: task.id,
            })
          }}>Delete</button>
        </label>
      ))}
    </ul>
  );
}
