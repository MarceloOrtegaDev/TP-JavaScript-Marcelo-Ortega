let tareas = [ ]
let opciones;
let opSalir = 1;

function agregarTarea(nombre) {
    const regex = /^\S+$/;
    if(regex.test(nombre)){
    tareas.push(nombre)
    alert("Tarea nueva Añadida \n" + nombre)
    } else{
    alert("Ingrese un valor sin espacios!")
    }
}

function listarTareas() {
    let list = ""
    for (let i = 0; i < tareas.length; i++) {
        list += tareas[i] + ", ";
    }
    alert(list)
}


function editarTarea(nombre) {
    let task = tareas.includes(nombre)
    if (task == true) {
        const regex = /^\S+$/;
        let nuevoNom = prompt("Ingrese un nombre nuevo para la tarea:")
        if (regex.test(nuevoNom)){
            tareas.splice(tareas.indexOf(nombre),1,nuevoNom)
            alert("El nombre nuevo es: "+nuevoNom)
        } else {
            alert("El nombre nuevo no debe contener espacios!")
            }
        } else {
            alert("Nombre invalido, intente de nuevo!")
        }
}   

function eliminarTarea(nombre) {
    let task = tareas.includes(nombre)
    if (task == true) {
        tareas.splice(tareas.indexOf(nombre), 1)
    } else {
        alert("Ese nombre no se encuentra en la lista.")
    }
}
while (opSalir !== 0) {
    opciones = parseInt(prompt(`Ingrese la opción a realizar:
    1-Agregar tarea
    2-ListarTareas 
    3-Editar tareas 
    4-Eliminar Tarea
    0-Salir`))



    switch (opciones) {
        case 1:
            agregarTarea(prompt("Ingrese el nombre de la tarea:"));
            break;
        case 2:
            listarTareas(tareas);
            break;
        case 3:
            editarTarea(prompt("Ingrese el nombre de la tarea que quiere editar: "+ tareas));
            break;
        case 4:
            eliminarTarea(prompt("Ingrese el nombre del valor que quiere eliminar: "+ tareas));
            break;
        case 0:
            opSalir = 0;
            break;
        default:
            alert("ingrese una opcion dentro de los parámetros!")
            break;
    }
}


