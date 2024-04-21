let addBtn = document.querySelector("#add-btn")
let clear = document.querySelector("#clear-completed")
let taskInput = document.querySelector('#new-task')

function addBtnClick(){
    console.log("Добавить дело")
    let taskText = taskInput.value
    if(taskText == ""){
        console.log("Введено пустое поле")
    }
    else{
        console.log(taskText)
    }
}

function clearClick(){
    console.log("Удалить выполненые")
    let completed = document.querySelectorAll('.done')
    completed[0].remove()
}

addBtn.addEventListener("click", addBtnClick)
clear.addEventListener('click', clearClick)