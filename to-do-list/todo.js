let tasks = [];

async function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task !== "") {
        tasks.push(task);
        taskInput.value = "";
        await renderTasks();
    }
}

async function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(index);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(index);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

async function editTask(index) {
    const newTask = prompt("Enter new task:");
    if (newTask !== null) {
        tasks[index] = newTask.trim();
        await renderTasks();
    }
}

async function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        await renderTasks();
    }
}

renderTasks();
