import classes from "../styles/Todolist.module.css";
import { useState } from "react";

export default function Todolist({ tasks, onDelete, onChange }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ul className={classes.ul}>
      {tasks.map((task, idx) => (
        <label key={idx}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              onChange({
                ...task,
                done: e.target.checked,
              });
            }}
          />
          {isEditing ? (
            <>
              <input
                value={task.text}
                onChange={(e) => {
                  onChange({
                    ...task,
                    text: e.target.value,
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
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
      ))}
    </ul>
  );
}
