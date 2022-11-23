import { useRef } from "react";

import classes from "./addTaskInput.module.css";

function AddTaskInput() {
  const nameInputRef = useRef();
  const descrInputRef = useRef();

  function submitHandler(submit) {
    submit.preventDefault();

    var existingTasks = JSON.parse(localStorage.getItem("allTasks"));
    if (existingTasks == null) existingTasks = [];

    var completedAmount = JSON.parse(localStorage.getItem("completedAmount"));
    if (completedAmount == null) completedAmount = 0;

    var removedAmount = JSON.parse(localStorage.getItem("removedAmount"));
    if (removedAmount == null) removedAmount = 0;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;

    var task = {
      id: existingTasks.length + 1 + completedAmount + removedAmount,
      name: nameInputRef.current.value,
      date: today,
      description: descrInputRef.current.value,
    };

    localStorage.setItem("tasks", JSON.stringify(task));
    existingTasks.push(task);

    localStorage.setItem("allTasks", JSON.stringify(existingTasks));

    window.dispatchEvent(new Event("storage"));

    nameInputRef.current.value = "";
    descrInputRef.current.value = "";
  }

  return (
    <div>
      <div className={classes.title}>Add new Task</div>
      <form onSubmit={submitHandler} id="task_form" className={classes.task}>
        <div className={classes.space}>
          <label>Name of the Task</label>
          <input type="text" id="name" required ref={nameInputRef} />
        </div>
        <div>
          <label>Description of the task</label>
          <textarea type="text" id="descr" ref={descrInputRef} />
        </div>
        <div className={classes.submit}>
          <button>Add Task</button>
        </div>
      </form>
    </div>
  );
}

export default AddTaskInput;
