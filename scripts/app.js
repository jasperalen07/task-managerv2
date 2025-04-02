// Fetch both containers ID

const inputBox = document.getElementById('input-box');
const taskContainer = document.getElementById("task-list-container");

// Create a function for adding tasks, once you click the button add, it should proceed to add another container of tasks, then create a <li> element.

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert('Please write a task!');
        return;
    }

    // Create a new <li> element
    const li = document.createElement("li");

    // Set the inner HTML of the <li> element
    li.innerHTML = `
    <label>
        <input class="checkbox" type="checkbox">
        <span class="task-font">${task}</span>
    </label>
    <div class="button-container">
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    </div>
    `;

    const checkbox = li.querySelector('input');
    const editBtn = li.querySelector('.edit-btn');
    const taskSpan = li.querySelector('.task-font');
    const deleteBtn = li.querySelector('.delete-btn');

    taskContainer.appendChild(li);
    inputBox.value = "";

    // Add event listeners
    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });

    editBtn.addEventListener("click", function () {
        const update = prompt("Edit Task:", taskSpan.textContent);
        if (update !== null) {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false;
            updateCounters();
        }
    });

    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();
            updateCounters();
        }
    });
}

// Task functionality, to track the tasks that are complete and uncompleted the counter makes that happen

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;
    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}







