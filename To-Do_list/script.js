const todolist = document.getElementById('list');
const newTask = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTask');

let tasks = [];
addTaskButton.addEventListener('click', addTask);

function addTask(){
    const taskText = newTask.value.trim();
    if(taskText){
        tasks.push({text : taskText, done: false});
        newTask.value = "";
        renderTasks();
    }
}

function renderTasks(){
    todolist.innerHTML = '';
    tasks.forEach((task ,index)=>{
        const taskElement = document.createElement('li');
        taskElement.className = 'todo-item';
        taskElement.textContent = task.text;
        if(task.done){
            taskElement.classList.add('done');
        };
        taskElement.addEventListener('click', ()=>toggleTaskDone(index));
        todolist.appendChild(taskElement);
    });
}

function toggleTaskDone(index){
    tasks[index].done = !tasks[index].done;
    renderTasks();
}