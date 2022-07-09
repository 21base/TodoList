const addBtn = document.querySelector(".inputZone button"),
todoInput = document.querySelector(".inputZone input"),
todoList = document.querySelector(".todoList");

const listData = [];
todoInput.focus()

// create html Element when a button is clicked 
let todoId = 0;
addBtn.onclick = () => {
    if (todoInput.value != '') {
        todoId = todoId + 1;
        listData.push({
            id: todoId,
            text: todoInput.value,
            completed: false
        })
        newListDate();
    }
    todoInput.value = '';
}

function newListDate () { 
    listData.map(item => {
        if (item.id == todoId) {
            let listOfTodo = document.createElement("div");
            listOfTodo.classList.add("listOfTodo");
            listOfTodo.setAttribute("id", item.id)

            let inputCheckbox = document.createElement("input");
            inputCheckbox.setAttribute("type", "checkbox");
            inputCheckbox.setAttribute("onClick", "todoComplete(this)");
            inputCheckbox.setAttribute("id", item.id);

            todo = document.createElement("p");
            todo.setAttribute("class", "todo");
            todo.setAttribute("id", item.id);
            todo.innerHTML = item.text;

            let closeBtn = document.createElement("p");
            closeBtn.setAttribute("class", "close");
            closeBtn.setAttribute("onclick", "cancelTodo(this)");
            closeBtn.setAttribute("id", item.id);
            closeBtn.innerHTML = "&#10006";

            // append all 
            listOfTodo.appendChild(inputCheckbox)
            listOfTodo.appendChild(todo)
            listOfTodo.appendChild(closeBtn)

            // display html
            return todoList.appendChild(listOfTodo);
        } 
    })
}


// let clicked = false;
function todoComplete (hold) {
    const sweet = document.querySelectorAll(".todo");
    chkId = hold.getAttribute("id");

    if (hold.getAttribute("checked")) {
        hold.removeAttribute("checked");
        for (let x = 0; x < sweet.length; x++) {
            if (sweet[x].getAttribute("id") == chkId) {
                sweet[x].classList.remove("ltr");
            }
        }
    } else {
        hold.setAttribute("checked", true)
        for (let x = 0; x < sweet.length; x++) {
            if (sweet[x].getAttribute("id") == chkId) {
                sweet[x].classList.add("ltr");
            }
        }
    }
}

function cancelTodo(hold) {
    const sweet = document.querySelectorAll(".listOfTodo");
    chkId = hold.getAttribute("id");

    for (let x = 0; x < sweet.length; x++) {
        if (sweet[x].getAttribute("id") == chkId) {
            sweet[x].style.display = "none";
        }
    }
}


// Copyright 2022 21base  





