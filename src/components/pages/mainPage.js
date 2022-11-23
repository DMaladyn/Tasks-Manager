import AddTaskInput from "./addTaskInput";
import { TasksList } from "./tasksList";
import classes from "./mainPage.module.css";

function MainPage() {
  return (
    <div className={classes.grid_main}>
      <AddTaskInput />
      <TasksList />
    </div>
  );
}

export default MainPage;
