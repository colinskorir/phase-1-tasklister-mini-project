document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    
    if (taskText.length > 0) {
      const taskItem = document.createElement('li');
      taskItem.className = 'task-item';
      
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.style.marginLeft = '10px';
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });
      
      taskItem.appendChild(taskSpan);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
      
      taskInput.value = '';
    } else {
      alert('Task cannot be empty!');
    }
  });
});