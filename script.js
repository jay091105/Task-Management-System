
const task = [];

// Function to add a new task
function f1() {
    let title = document.getElementById("taskTitle").value;
    let status = document.getElementById("taskStatus").value;
    let priority = parseInt(document.getElementById("taskPriority").value);

    // Validate input fields
    if (title && status && priority >= 1 && priority <= 5) {
        const newTask = {
            tit: title,
            sta: status,
            pri: priority
        };
        task.push(newTask);
        updateTaskList();
    } else {
        alert("Please fill in all fields with valid information.");
    }
}

// Function to filter tasks by Pending status
function f3() {
    let pending = task.filter(task => task.sta === "Pending");
    f2(pending);
}

// Function to filter tasks by Completed status
function f4() {
    let completed = task.filter(task => task.sta === "Completed");
    f2(completed);
}

// Function to filter tasks by High Priority (5)
function f5() {
    const highPriorityTasks = task.find(task => task.pri === 5);
    const dis= document.getElementById("taskDisplay");
    dis.innerHTML="";
    if (highPriorityTasks) {
        let taskItem=document.createElement("li");
        taskItem.textContent=`Task: ${highPriorityTasks.tit}, Priority: ${highPriorityTasks.pri}, Status: ${highPriorityTasks.sta}`;
        dis.appendChild(taskItem);    
    } else {
        let noTask = document.createElement('li');
        noTask.textContent = "No High Priority (5) task found.";
        dis.appendChild(noTask);
    }
}

// Display function to update the task list
function f2(newTask) {
    const dis = document.getElementById("taskDisplay");
    dis.innerHTML = "";  // Clear existing tasks

    if (newTask.length > 0) {
        newTask.forEach(task => {
            let taskItem = document.createElement('li');
            taskItem.textContent = `Task: ${task.tit}, Priority: ${task.pri}, Status: ${task.sta}`;
            dis.appendChild(taskItem);
        });
    } else {
        let noTask = document.createElement('li');
        noTask.textContent = "No tasks available.";
        dis.appendChild(noTask);
    }
}

// Update the task list whenever a new task is added
function updateTaskList() {
    f2(task);
}


