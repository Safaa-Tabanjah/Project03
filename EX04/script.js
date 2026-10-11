const taskInput=document.getElementById("taskInput");
const total=document.getElementById("count");
const add=document.getElementById("add");
const list=document.getElementById("list");


function addTask (){

const taskAdded= taskInput.value.trim();

if ( taskAdded ==="")
    return;

const li=document.createElement("li");
li.textContent =taskAdded;

li.addEventListener("click" , function(){
li.classList.toggle("completed");


});

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
        updateTaskCount();
    });

   li.appendChild(deleteButton);

    list.appendChild(li);

    taskInput.value = "";

    updateTaskCount();
}

function updateTaskCount() {
    total.textContent = list.children.length;
}

add.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
