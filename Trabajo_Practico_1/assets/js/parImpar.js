
let num = parseInt(prompt("Ingrese un número dentro de los números enteros para verificar si es par o impar"))

if (num % 2 == 0){
    document.write(`El ${num} es un número par`)
} else {
    document.write (`El ${num} es impar`)
}