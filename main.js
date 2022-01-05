const inputBox = document.querySelector(".inputArea input");
const addBtn = document.querySelector(".inputArea button");
const todoList = document.querySelector(".todo-list");

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        addBtn.classList.add("active");
    } else(
        addBtn.classList.remove("active")
    )
}


showTodoList();

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New List");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage)
    }

    listArr.push(userData);
    localStorage.setItem("New List", JSON.stringify(listArr));
    showTodoList();

}

function showTodoList() {
    let getLocalStorage = localStorage.getItem("New List");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }

    const pending = document.querySelector(".pendings");
    pending.textContent = listArr.length;

    let newList = '';
    listArr.forEach((element, index) => {
        newList += `<li> ${element} <span onclick = "deleteTodo(${index})";><i class="fa fa-trash "></i></span></li>`;
    });
    todoList.innerHTML = newList;
    inputBox.value = "";
}


function deleteTodo(index) {
    let getLocalStorage = localStorage.getItem("New List");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    //update 
    localStorage.setItem("New List", JSON.stringify(listArr));
    showTodoList();
}