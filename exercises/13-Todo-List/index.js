// Your code here
const addTask = document.querySelector("#addToDo");
const ul = document.querySelector("ul")

function addTask2(event){
    if (event.keyCode === 13) {
        const elemLi = document.createElement("li");
        const elemSpan = document.createElement("span");
        const elemIcon = document.createElement("i");
        const text = document.createTextNode(" " + event.target.value)

        elemIcon.className = "fa fa-trash";
        elemSpan.appendChild(elemIcon);
        elemLi.appendChild(elemSpan);
        elemLi.appendChild(text);

        ul.appendChild(elemLi)
        event.target.value = "";
    }
}

function deleteTask2(event){
    if(event.target.matches(".fa-trash")){
        event.target.parentElement.parentElement.remove();
    }
}

addTask.addEventListener("keydown", addTask2);
ul.addEventListener("click",deleteTask2);

