alert("Las notas deben estar en el rango del 1 al 10 o no serán validas.")
let notaAlumno1 = parseInt(prompt("Ingrese la nota del primer cuatrimestre"))

let notaAlumno2 = parseInt(prompt("Ingrese la nota del segundo cuatrimestre"))

let notaAlumno3 = parseInt(prompt("Ingrese la nota del tercer cuatrimestre "))

let notaSuma = notaAlumno1 + notaAlumno2 + notaAlumno3;

let promedio = notaSuma / 3

if (notaAlumno1 < 1 || notaAlumno1 > 10 || notaAlumno2 < 1 || notaAlumno2 > 10 || notaAlumno3 < 1 || notaAlumno3 > 10){
    alert("Usted ingresó un valor inadecuado")
} else {
    if (promedio >= 1 && promedio < 4){
        document.write("Nota insuficiente, Promedio = "+promedio)
    } else if (promedio >= 4 && promedio < 6){
        document.write("Nota regular, Promedio = "+ promedio)
    } else if (promedio >= 6 && promedio < 8){
        document.write("Nota buena, promedio = "+ promedio)
    } else if (promedio >= 8 && promedio < 10){
        document.write("Nota muy buena, promedio = "+ promedio)
    } else if (promedio == 10){
        document.write("Nota sobresaliente, promedio = "+ promedio)
    } else {
        document.write("Usted no ingresó un valor adecuado, recargue la página.")
    }
}



