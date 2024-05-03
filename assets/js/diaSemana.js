
let semana = parseInt(prompt ("Los días de la semana estan vinculadas a los números del 1 al 7, ingrese en qué día de la semana se encuentra:"))

switch (semana){
    case 1: 
        document.write("Es lúnes")
        break;
    case 2: 
        document.write("Es martes")
        break;
    case 3: 
        document.write("Es miercoles")
        break;
    case 4:
        document.write("Es jueves")
        break;
    case 5:
        document.write("Es viernes")
        break;
    case 6:
        document.write("Es sábado")
        break;
    case 7:
        document.write("Es domingo")
        break;
    default:
        document.write ("Ese no es un día de la semana.")
}