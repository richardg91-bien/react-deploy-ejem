

import { useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
import { TaskContext } from "./TaskContext";

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
    
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, title: task.title, description: task.description }
    ]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

