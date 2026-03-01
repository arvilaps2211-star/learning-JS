// Select Elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearAll");

// Array of Objects
let tasks = [];

// Event Listeners
addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAll);

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Add Task
function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Push object
    tasks.push({
        text: taskText,
        completed: false
    });

    input.value = "";
    renderTasks();
}

// Render Tasks
function renderTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        const li = document.createElement("li");
        li.textContent = tasks[i].text;

        // If completed → add line-through
        if (tasks[i].completed) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.6";
        }

        // Toggle complete when clicking task
        li.addEventListener("click", function() {
            toggleComplete(i);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation(); // prevent toggle when deleting
            deleteTask(i);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    taskCount.textContent = "Total Tasks: " + tasks.length;
}

// Toggle Complete
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Delete Task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Clear All
function clearAll() {
    tasks = [];
    renderTasks();
}