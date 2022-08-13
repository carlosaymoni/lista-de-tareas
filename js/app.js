// info de los elementos
const input = document.getElementById("input");
const btnAdd = document.getElementById("addtask");
const btnOff = document.getElementById("offtask");
const tasks = document.getElementById("list-task");
const text = document.getElementById("text-end");

// Agregamos las tarea que ingresamos en el input
function agregar () {
    let task = input.value;
    if(!task) return;

    text.style.display = "none"; 
    const lista = document.createElement('div');
    const items = document.createElement('p');
    items.textContent = task
    lista.appendChild(items);
    lista.appendChild(btnOffTask());
    lista.className = "lista-item";
    tasks.appendChild(lista);

    input.value = "";
}

// Eliminamos todas las tareas 
function eliminar () {
    tasks.textContent = "";
    text.style.display = "block"; 
}

// Creamos un boton para eliminar de a una tarea por vez
function btnOffTask () {
    const btnTask = document.createElement('button');
    btnTask.textContent = "X";
    btnTask.className = "btnOffTask";
    btnTask.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        tasks.removeChild(item);

        if(tasks.textContent == ""){
            text.style.display = "block"; 
        }
    });
    return btnTask;
}