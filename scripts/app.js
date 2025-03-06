// Fetch both containers ID

const  inputBox = document.getElementById('input-box');
 const taskContainer = document.getElementById("task-list-container");

//  Create a function for adding tasks, once you click the button add,  it should proceed to add a another container of tasks, then a create a <li> element.

function addTask(){
    const task = inputBox.value.trim();
    if (!task){
        alert('Please write a task!')
        return;
    }

    // Once created a new element create a inner html
    const li =  document.createElement("li");
    
    li.innerHTML = `
    <label>
    <input type = "checkbox">
    <span>${task}</span>
    
    </label>
    
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    
    `;

    const checkbox = li.querySelector('input');
    const editBtn = li.querySelector('.edit-btn');
    const taskSpan = li.querySelector('span');
    const deleteBtn = li.querySelector('.delete-btn');

    
    taskContainer.appendChild(li);
    inputBox.value ="";
    // Start to make sure the buttons work, by doing an event listener
    
    checkbox.addEventListener("click", function() {
        li.classList.toggle("completed", checkbox.checked);
    
        updateCounters();
    });
    // make an event listener for the checkbox, when the task is completed it should create a line thorugh the middle. Must do a css but first we will create a toggle
    
    // Make an event listener for the edit button, that you can also update
    
    editBtn.addEventListener("click", function(){
        const update = prompt("Edit Task:", taskSpan.textContent);
        if (update !== null){
            taskSpan.textContent = update;
            li.classList.remove("completed");
    
            checkbox.checked = false;
            // updateCounters();
        }
    
    });

    // Delete button functionality
deleteBtn.addEventListener("click", function() {
    if (confirm("Are you sure you want to delete this task? ")) {
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







