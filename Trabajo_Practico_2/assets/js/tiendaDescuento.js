let cantidadArt = parseInt(prompt("Ingrese la cantidad de articulos que compró"))

let precio = parseInt (prompt("Cuánto valió cada artículo"))

let calc = cantidadArt * precio
let desc = calc * 0.85

switch (true){
    case isNaN(cantidadArt) || isNaN(precio):
        document.write("Porfavor ingrese un valor válido");
        break;
    case precio < 1 || cantidadArt < 1:
        document.write("Usted ingreso valores invalidos")
        break;
    case cantidadArt > 9 && calc > 20000:
        document.write(`Su precio con descuento es igual a ${desc}`)
        break;
    case cantidadArt < 10:
        document.write(`El precio de sus articulos es igual a ${calc}`)
        break;
    default:
        document.write("Usted no ingresó valores correctos.")
}