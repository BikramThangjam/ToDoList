let todoItem = document.getElementById("todo-item");

let btnAddTask = document.querySelector("#add-task");
let btnAddPriority = document.querySelector("#add-priority");
let btnDeleteAll = document.querySelector("#delete-all");

let ul = document.querySelector(".ul-list");

let addTask = function(){
   if(todoItem.value){
    const newDivItem = document.createElement('div');
    const newListItem = document.createElement('li');
    const newCompleteBtn = document.createElement('button');
    const newDeleteBtn = document.createElement('button');

    //Add class here
    newDivItem.classList.add("todo");
    newListItem.classList.add("todo-li-item");
    newCompleteBtn.classList.add("complete-btn","task-btn");
    newDeleteBtn.classList.add("delete-btn","task-btn");

    newListItem.innerText = todoItem.value;
    newCompleteBtn.innerText = "Completed";
    newDeleteBtn.innerText = "Delete";

    newCompleteBtn.setAttribute("onclick", "completeTask(event)");
    newDeleteBtn.setAttribute("onclick", "deleteTask(event)")
    newDivItem.append(newListItem);
    newDivItem.append(newCompleteBtn);
    newDivItem.append(newDeleteBtn);
    ul.append(newDivItem);
    todoItem.value = '';
   }
}

let addPriorityTask = function(){
    if(todoItem.value){
        const newDivItem = document.createElement('div');
        const newListItem = document.createElement('li');
        const newCompleteBtn = document.createElement('button');
        const newDeleteBtn = document.createElement('button');

        //Add class here
        newDivItem.classList.add("todo");
        newListItem.classList.add("todo-li-item");
        newCompleteBtn.classList.add("complete-btn", "task-btn");
        newDeleteBtn.classList.add("delete-btn","task-btn");

        newCompleteBtn.setAttribute("onclick", "completeTask(event)");
        newDeleteBtn.setAttribute("onclick", "deleteTask(event)");

        newListItem.innerText = todoItem.value;
        newCompleteBtn.innerText = "Completed";
        newDeleteBtn.innerText = "Delete";
        newDivItem.append(newListItem);
        newDivItem.append(newCompleteBtn);
        newDivItem.append(newDeleteBtn);
        ul.prepend(newDivItem);
        todoItem.value = '';
    }
}

let deleteAllTask = ()=>{
    while(ul.firstChild){
        ul.firstChild.remove();
    }
}

let completeTask = (e)=>{
    completeBtn = e.target;
    deleteBtn = e.target.nextSibling;
    let div = e.target.parentElement;
    div.style.opacity = "0.3";
   completeBtn.classList.add("no-hover"); 
}  

let deleteTask = (e)=>{
    let div = e.target.parentElement;
    //console.log(div);
    //div.style.display = 'none';
    div.remove();
}


btnAddTask.addEventListener("click", addTask);
btnAddPriority.addEventListener("click", addPriorityTask);
btnDeleteAll.addEventListener("click",deleteAllTask);

