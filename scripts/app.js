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
    
    taskContainer.appendChild(li);
    inputBox.value ="";
}

// Start to make sure the buttons work, by doing an event listener

const checkbox = li.querySelector('input');
const editBtn = li.querySelector('edit-btn');
const taskSpan = li.querySelector('span');
const deleteBtn = li.querySelector('delete-btn');

// make an event listener for the checkbox, when the task is completed it should create a line thorugh the middle. Must do a css but first we will create a toggle

checkbox.addEventListener("click", function() {
    li.classlist.toggle("completed", checkbox.checked);
});

// Make an event listener for the edit button, that you can also update

editBtn.addEventListener("click", function(){
    const update = prompt("Edit Task:", taskSpan.textContent);
    if (update !== null){
        taskSpan.textContent = update;
        li.classlist.remove("completed");
    }

});

// Task functionality, to track the tasks that are complete and uncompleted the counter makes that happen

const completedTasks = document.getElementById("completed-counter");
const uncompletedTasks = document.getElementById("uncompleted-counter");


