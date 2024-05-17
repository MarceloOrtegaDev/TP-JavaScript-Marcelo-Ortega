let tareas = []
let opciones;
let r = 1;
const regex = /^\S+$/;


function agregarTarea() {
    tareas.push(prompt("Ingrese la nueva tarea:"))
    alert("Tarea nueva Añadida \n" + tareas)
}

function listarTareas() {
    let list = ""
    for (let i = 0; i < tareas.length; i++) {
        list += tareas[i] + " ";
    }
    alert(list)
}

function editarTarea(nombre) {
    let task = tareas.includes(nombre)
    if (task == true) {
        tareas.splice(tareas.indexOf(nombre), 1, prompt("Ingrese el nuevo nombre"))
    } else {
        alert("Nombre incorrecto")
    }

}   

function eliminarTarea(nombre) {
    let task = tareas.includes(nombre)
    if (task == true) {
        tareas.splice(tareas.indexOf(nombre), 1)
    } else {
        alert("Nombre incorrecto")
    }
}


while (r !== 0) {
    opciones = parseInt(prompt(`Ingrese la opción a realizar:
    1-Agregar tarea
    2-ListarTareas 
    3-Editar tareas 
    4-Eliminar Tarea
    0-Salir`))



    switch (opciones) {
        case 1:
            agregarTarea();
            break;
        case 2:
            listarTareas();
            break;
        case 3:
            editarTarea(prompt("Ingrese el nombre de la tarea que quiere editar"));
            break;
        case 4:
            eliminarTarea(prompt("Ingrese el nombre de la tarea que quiere eliminar"));
            break;
        case 0:
            r = 0;
            break;
        default:
            console.log("ingrese una opcion valida")
            break;
    }
}


