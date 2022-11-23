import classes from "./task.module.css";
import RemoveTask from "./removeTask";
import CompleteTask from "./completeTask";

function Task(props) {
  function localRemoveTask() {
    RemoveTask(props.id);
  }

  function localCompleteTask() {
    CompleteTask(props.id);
  }
  return (
    <div className={classes.task}>
      <ul className={classes.oppositeSide}>
        <li className={classes.name} key={props.id}>
          {props.name}
        </li>
        <li className={classes.date}>{props.date}</li>
      </ul>
      <ul>
        <li className={classes.description}>{props.description}</li>
        <ul className={classes.nextTo}>
          <li>
            <button className={classes.delete} onClick={localRemoveTask}>
              Delete
            </button>
          </li>
          <li>
            <button className={classes.complete} onClick={localCompleteTask}>
              Complete
            </button>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Task;
