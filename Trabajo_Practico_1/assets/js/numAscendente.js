alert ("Ingrese 3 Números distintos porfavor.")
let num1 = parseInt(prompt("Ingrese el valor para el num1"));
let num2 = parseInt(prompt("Ingrese el num 2"));
let num3 = parseInt(prompt("ingrese el tercer valor"))

if ( num1 > num2 && num1 > num3 && num2 > num3 ){
    document.write(`El orden es ${num1} ${num2} ${num3}`)
} else if ( num1 > num2 && num1 > num3 && num3 > num2 ){
    document.write(`El orden es ${num1} ${num3} ${num2}`)
} else if ( num2 > num1 && num2 > num3 && num1 > num3 ){
    document.write(`El orden es ${num2} ${num1} ${num3}`)
}else if ( num2 > num1 && num2 > num3 && num3 > num1 ){
    document.write(`El orden es ${num2} ${num3} ${num1}`)
} else if ( num3 > num1 && num3 > num2 && num1 > num2 ){
    document.write(`El orden es ${num3} ${num1} ${num2}`)
}else if ( num3 > num1 && num3 > num2 && num2 > num1 ){
    document.write(`El orden es ${num3} ${num2} ${num1}`)
}else if ( num1 == num2 && num1 == num3 ){
    document.write(`El orden es ${num1} ${num2} ${num3}`)
}else {
    alert("Usted no escribió los números para ordenarlos de forma ascendente.")
}