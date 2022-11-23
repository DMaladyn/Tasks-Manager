function RemoveTask(props) {
  var tasks = JSON.parse(localStorage.getItem("allTasks"));
  var removedAmount = JSON.parse(localStorage.getItem("removedAmount"));
  if (removedAmount == null) removedAmount = 0;

  removedAmount += 1;
  tasks = tasks.filter((task) => task.id !== props);

  localStorage.setItem("removedAmount", JSON.stringify(removedAmount));
  localStorage.setItem("allTasks", JSON.stringify(tasks));

  window.dispatchEvent(new Event("storage"));
}

export default RemoveTask;
