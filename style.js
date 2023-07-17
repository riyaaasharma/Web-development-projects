const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

taskList.addEventListener('click', markAsCompleted);

function addTask() {
  const task = taskInput.value;
  if (task !== '') {
    const listItem = document.createElement('li');
    listItem.innerText = task;
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
}

function markAsCompleted(event) {
  const listItem = event.target;
  if (!listItem.classList.contains('completed')) {
    listItem.classList.add('completed');
  } else {
    listItem.classList.remove('completed');
  }
}
