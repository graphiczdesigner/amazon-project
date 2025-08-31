const saveVal = [];

// Set minimum date to today
document.addEventListener('DOMContentLoaded', function() {
  const today = new Date().toISOString().split('T')[0];
  document.querySelector('.due-date-js').min = today;
});

function addVal() {
  const getName = document.querySelector('.name-js');
  const name = getName.value.trim();

  const getDueDate = document.querySelector('.due-date-js');
  const dueDate = getDueDate.value;

  if (!name) {
    alert('Please enter a task name');
    return;
  }

  if (!dueDate) {
    alert('Please select a due date');
    return;
  }

  saveVal.push({
    name,
    dueDate,
    id: Date.now() // Add unique ID for better item management
  });
  
  updateToDoList();
  getName.value = '';
  getDueDate.value = '';
  getName.focus();
}

function updateToDoList() {
  let displayData = document.querySelector('.display-data-js');
  displayData.innerHTML = '';

  if (saveVal.length === 0) {
    displayData.innerHTML = '<div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 20px; color: #7f8c8d;">No tasks yet. Add one above!</div>';
    return;
  }

  saveVal.forEach((valObj, index) => {
    const { name, dueDate } = valObj;
    const formattedDate = formatDate(dueDate);
    
    const itemElement = document.createElement('div');
    itemElement.className = 'todo-item';
    itemElement.innerHTML = `
      <div class="todo-name">${name}</div>
      <div class="todo-date">${formattedDate}</div>
      <button class="remove-btn" onclick="removeTodo(${index})">Delete</button>
    `;
    displayData.appendChild(itemElement);
  });
}

function removeTodo(index) {
  saveVal.splice(index, 1);
  updateToDoList();
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

updateToDoList();