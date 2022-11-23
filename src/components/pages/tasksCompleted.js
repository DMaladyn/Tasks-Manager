import classes from "./tasksCompleted.module.css";

function TasksCompleted() {
  var completed = [];
  completed = JSON.parse(localStorage.getItem("allCompletedTasks"));
  if (completed == null) completed = [];

  return completed.map((completed) => (
    <div className={classes.task}>
      <ul className={classes.oppositeSide}>
        <li className={classes.name}>{completed.name}</li>
        <li className={classes.date}>{completed.date}</li>
      </ul>
      <ul>
        <li className={classes.description}>{completed.description}</li>
      </ul>
    </div>
  ));
}

export default TasksCompleted;
