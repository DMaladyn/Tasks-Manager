import Task from "../tasks/task";
import classes from "./tasksList.module.css";

import { useState, useEffect } from "react";

function RemoveTask(id) {
  return console.log(id);
}

function TasksList() {
  const [allTasks, setAllTasks] = useState([]);
  var completedAmount = JSON.parse(localStorage.getItem("completedAmount"));

  useEffect(() => {
    window.addEventListener("storage", () => {
      var localTasks = JSON.parse(localStorage.getItem("allTasks"));
      if (localTasks) {
        setAllTasks(localTasks);
      }
    });
  }, []);

  useEffect(() => {
    var localTasks = JSON.parse(localStorage.getItem("allTasks"));
    if (localTasks) {
      setAllTasks(localTasks);
    }
  }, []);

  return (
    <div>
      <div className={classes.completed}>
        Completed Tasks: {completedAmount}
      </div>
      <ul>
        {allTasks.map((task) => (
          <Task
            id={task.id}
            name={task.name}
            date={task.date}
            description={task.description}
          />
        ))}
      </ul>
    </div>
  );
}

export { TasksList, RemoveTask };
