var createTodoItem = (todoText) => {
  /* 
  Function to create a new todo item element based on the provided todoText.
  Parameters:
  - todoText (string): The text content for the todo item.
  Returns:
  - li (HTMLLIElement): The created <li> element representing the todo item.
  */

  // Create a new <li> element to represent the todo item.
  var li = document.createElement('li'); 

  // Create a checkbox input element for marking the todo item
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  // Create a <span> element to display the todo text content.
  var textSpan = document.createElement('span');
  textSpan.textContent = todoText;

  // Create a <span> element for the delete button to remove the todo item.
  var deleteButton = document.createElement('span');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';

  // Append the checkbox, textSpan, and deleteButton elements to the <li> element.
  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(deleteButton);

  // Return the newly created <li> element representing the todo item.
  return li;
}

var updateTaskCount = () => {
  /*
  Function to update the displayed task count.
  This function retrieves the element for displaying the task count and calculates the total number of tasks
  currently present in the todo list. It then updates the text content of the task count element to reflect
  the total number of tasks.
  */

  // Get the element that displays the task count.
  var taskCountElement = document.getElementById('taskCount');

  // Get the total number of tasks by querying all the <li> elements in the todo list.
  var taskCount = document.querySelectorAll('li').length;

  // Update the text content of the task count element with the calculated total tasks.
  taskCountElement.textContent = `Total tasks: ${taskCount}`;
}


var addtask = () => {
  /* Function to add a new task to the list based on the user input*/

  // Get the element that take user input
  var todoInput = document.getElementById('todoInput');
  var todoText = todoInput.value.trim();

  if(todoText !== '') {
    // if the user input is not empty it will add the element in to the todolist.
    var todoList = document.getElementById('todoList');
    var newTodoItem = createTodoItem(todoText);
    todoList.appendChild(newTodoItem);

    // make the input box to empty
    todoInput.value = '';

    // Update the task count
    updateTaskCount();
  }
}

var deleteTask = (e) => {
  /* function to delete a existing task from the todo list */
  if (e.target.classList.contains("delete")) {
    // if the target element contains a class named delete, then the target is removed and count is updated
    e.target.parentElement.remove();
    updateTaskCount();
  }
}

var checkUnCheckTask = (e) => {
  /* Function to check and uncheck the checkbox */
  if (e.target.classList.contains('checkbox')) {
    var todoItem = e.target.parentElement;
    if (e.target.checked){
      todoItem.classList.add('checked');
    } else {
      todoItem.classList.remove('checked');
    }
  }
}

// Add todo item when clicking on the Add button
document.getElementById('addButton').addEventListener('click', addtask);

// Delete todo item when clicking on the Delete button
document.getElementById('todoList').addEventListener('click', deleteTask);

// Check/uncheck todo item when clicking on the checkbox
document.getElementById('todoList').addEventListener('click', checkUnCheckTask);