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

const 


