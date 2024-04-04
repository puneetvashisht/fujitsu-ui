document.addEventListener("DOMContentLoaded", function () {
  const addTaskBtn = document.getElementById("addTaskBtn");
  const newTaskInput = document.getElementById("newTask");
  const taskList = document.getElementById("taskList");

  function addTask(taskContent) {
    const li = document.createElement("li");
    li.textContent = taskContent;

    li.classList.add("task-item");
    taskList.appendChild(li);
    newTaskInput.value = "";
  }

  addTaskBtn.addEventListener("click", function () {
    const taskContent = newTaskInput.value.trim();
    if (taskContent) {
      addTask(taskContent);
    } else {
      alert("Please enter a task!");
    }
  });

  taskList.addEventListener("click", function (e) {
    if (e.target && e.target.matches(".task-item")) {
      e.target.classList.toggle("completed");
    }
  });
});
