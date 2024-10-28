function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  if (taskInput.value.trim() === "") {
    alert("Enter a new Task!");
    return;
  }

  const li = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = taskInput.value;
  taskText.onclick = function () {
    toggleComplete(li);
  };

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit";
  editButton.onclick = function () {
    editTask(taskText);
  };

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";
  deleteButton.onclick = function () {
    taskList.removeChild(li);
  };

  const doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  doneButton.className = "done";
  doneButton.onclick = function () {
    toggleComplete(li);
    editButton.style.display = "none";
    doneButton.style.display = "none";
  };

  li.appendChild(taskText);
  li.appendChild(editButton);
  li.appendChild(doneButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
  taskInput.value = "";
}
function toggleComplete(task) {
  task.classList.toggle("completed");
}
function editTask(taskText) {
  const newTask = prompt("Edit your task: ", taskText.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    taskText.textContent = newTask;
  }
}
