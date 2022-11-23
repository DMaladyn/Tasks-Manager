function CompleteTask(props) {
  var tasks = JSON.parse(localStorage.getItem("allTasks"));
  var completedTasks = JSON.parse(localStorage.getItem("allCompletedTasks"));
  var completedAmount = JSON.parse(localStorage.getItem("completedAmount"));
  var completed;

  if (completedTasks == null) {
    completedTasks = [];
  }

  completedAmount += 1;

  completed = tasks.filter((task) => task.id === props);
  tasks = tasks.filter((task) => task.id !== props);

  completed = completed[0];

  console.log(completed);

  completedTasks.push(completed);

  localStorage.setItem("allTasks", JSON.stringify(tasks));
  localStorage.setItem("completedAmount", JSON.stringify(completedAmount));
  localStorage.setItem("allCompletedTasks", JSON.stringify(completedTasks));

  console.log(completedAmount);
  window.dispatchEvent(new Event("storage"));
}

export default CompleteTask;
