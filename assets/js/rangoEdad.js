let rangoEdad = parseInt(prompt("Esto es una condición para saber en que rango de edad te encuentras. Ingrese por favor cuantos años tiene:"))

if (rangoEdad >= 0 && rangoEdad <=12){
    document.write(`Tiene ${rangoEdad} años por lo tanto es un niño.`)
}else if (rangoEdad > 12 && rangoEdad <= 19){
    document.write(`Tiene ${rangoEdad} años por lo tanto es un adolescente.`)
} else if (rangoEdad > 19 && rangoEdad <= 59){
    document.write(`Tiene ${rangoEdad} años por lo tanto es un adulto.`)
} else if (rangoEdad > 59 && rangoEdad <= 120){
    document.write(`Usted tiene ${rangoEdad} años por lo tanto es un adulto mayor.`)
} else {
    document.write ("No es una edad válida.")
}