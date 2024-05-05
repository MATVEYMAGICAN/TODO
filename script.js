let addBtn = document.querySelector("#add-btn")
let clear = document.querySelector("#clear-completed")
let taskInput = document.querySelector('#new-task')
let taskList = document.querySelector('.list')

function addBtnClick(){
    console.log("Добавить дело")
    let taskText = taskInput.value
    taskInput.value = ''
    if(taskText == ""){
        console.log("Введено пустое поле")
    }
    else{
        let innerTask = '<div class="task-check">\
        <img src="image/Vector (3).svg" alt="" id="unchecked">\
        <img src="image/Vector (2).svg" alt="" id="checked">\
    </div>\
    <div class="task-text">\
        <p>Personal Work No. 1</p>\
    </div>\
    <div class="task-delete">\
        <img src="image/Delete outline.svg" alt="">\
    </div>'
        let newTask = document.createElement('div')
        newTask.classList.add('task')
        newTask.innerHTML = innerTask
        let taskDelete = newTask.querySelector('.task-delete')
        taskDelete.addEventListener('click', removeTask)
        let taskCheck = newTask.querySelector(".task-check")
        taskCheck.addEventListener('click', setDone)
        taskList.appendChild(newTask)
        newTask.querySelector('.task-text').innerText = taskText
        console.log(taskText)
    }
}

function clearClick(){
    console.log("Удалить выполненые")
    let completed = document.querySelectorAll('.done')
    for(let i = 0; i < completed.length; i++){
        completed[i].remove()
    }
}

function removeTask(event){
    console.log('Удалить дело')
    event.currentTarget.parentNode.remove()
}

function setDone(event){
    console.log('Выполнить дело')
    event.currentTarget.parentNode.classList.toggle('done')

}

let tasks = document.querySelectorAll('.task')
for(let i = 0; i < tasks.length; i++){
    let taskDelete = tasks[i].querySelector('.task-delete')
    taskDelete.addEventListener('click', removeTask)
    let taskCheck = tasks[i].querySelector(".task-check")
    taskCheck.addEventListener('click', setDone)
}

addBtn.addEventListener("click", addBtnClick)
clear.addEventListener('click', clearClick)