function addTodo () {
    // get the task input
    const input = document.getElementById('todoInput');
    const task = input.value.trim();

    // check if task input is empty 
    if (task == "") {
        alert("Please enter a task !");
        return;
    }

    // store tasks in todo list 
    const list = document.getElementById('todoList');

    // listing items from todo list
    const listItem = document.createElement("li");
    listItem.textContent = task;
    // removing task -- onclick 
    listItem.onclick = function () {
        this.remove();
    }
    // adding task in list
    list.append(listItem);

    // clear the input field
    input.value = "";

}