import { Link } from "react-router-dom";

import classes from "./mainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Your Task Manager</div>
      <div className={classes.links}>
        <ul>
          <li>
            <Link to="/">Tasks</Link>
          </li>
          <li>
            <Link to="/da">Completed</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
