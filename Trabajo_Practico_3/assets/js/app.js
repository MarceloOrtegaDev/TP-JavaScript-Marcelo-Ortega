let tareas = [ ]
let opciones;
let r = 1;

function agregarTarea(nombre) {
    const regex = /^\S+$/;
    if(regex.test(nombre)){
    tareas.push(nombre)
    alert("Tarea nueva Añadida \n" + nombre)
    } else{
    alert("Ingrese un valor sin espacios")
    }
}

function listarTareas() {
    let list = ""
    for (let i = 0; i < tareas.length; i++) {
        list += tareas[i] + " ";
    }
    alert(list)
}


function editarTarea(tareas) {
    const regex = /^\S+$/;
    let opciones = prompt("Ingrese la posición que quiere editar:")
    if (regex.test(opciones) && opciones < tareas.length){
        let nuevaTarea = prompt("Ingrese el nuevo valor de la tarea")
        if (regex.test(nuevaTarea)){
            tareas.splice(opciones,1,nuevaTarea)
            alert("La nueva tarea se llama: "+ nuevaTarea)
        } else {
            alert("Ingrese un valor sin espacios")
        }
    } else{
        alert("Ingrese un valor valido")
    }

}

function eliminarTarea() {
    let opcioDel = parseInt(prompt("Ingrese el número de la tarea que quiere eliminar: "+ tareas));
        if (opcioDel.includes(tareas)){
            tareas.splice(tareas,1, opcioDel)
                alert("Tarea eliminada")
            }else{
                alert("Ingrese un valor correcto")
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
            agregarTarea(prompt("Ingrese el nombre de la tarea:"));
            break;
        case 2:
            listarTareas(tareas);
            break;
        case 3:
            editarTarea(tareas);
            break;
        case 4:
            eliminarTarea();
            break;
        case 0:
            r = 0;
            break;
        default:
            console.log("ingrese una opcion valida")
            break;
    }
}


