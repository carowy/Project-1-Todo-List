var addTask = document.getElementById('addTodo');
var input = document.getElementById('todo');

addTask.addEventListener('click', addNewTodo);
// ADD TASK + AFTER SUBMIT CLEAR THE INPUT FIELD
function addNewTodo() {
    var newTodo = input.value;
    var newTaskDiv = document.createElement('div');
    newTaskDiv.id = 'newTask';
    newTaskDiv.innerHTML = newTodo;
    document.body.appendChild(newTaskDiv);
    input.value = "";
}
