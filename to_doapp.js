function addtask() {
   const taskInput = document.getElementById("taskInput");
   const taskText = taskInput.value.trim();

   if (taskText === ''){
    alert("Please enter a task.");
    return;
   }
   const taskList = document.getElementById("tasklist");
   const listItem = document.createElement("li");

    //task text span
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    //complete button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "✔";
    completeButton.onclick =() => {
      taskSpan.classList.toggle("completed");
    };
    
    //remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "✖";
    removeButton.className = "remove-btn";
    removeButton.onclick = () => {
    taskList.removeChild(listItem);
    }

    //append everthing 
    listItem.appendChild(completeButton);
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);

    taskInput.value = ''; // Clear input field
}

