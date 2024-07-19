import {  createContext } from "react";
import React, { useReducer } from "react";

export const TaskContext = createContext(null);

export const DispatchContext = createContext(null);

export function TaskProvider({children}) {
    const [tasks, dispatch] = useReducer(tasksReducer, []);
return(
    <TaskContext.Provider value={tasks}>
        <DispatchContext.Provider value={dispatch}>
            {children}
        </DispatchContext.Provider>
    </TaskContext.Provider>
    )
}


function tasksReducer(tasks, action) {
    switch (action.type) {
      case "add": {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      case "change": {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case "delete": {
        return tasks.filter((i) => i.id !== action.id);
      }
      default: {
        throw Error("Unknown action");
      }
    }
  }