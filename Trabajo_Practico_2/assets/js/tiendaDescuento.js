let cantidadArt = parseInt(prompt("Ingrese la cantidad de articulos que compró"))

let precio = parseInt (prompt("Cuánto valió cada artículo"))

let calc = cantidadArt * precio
let desc = calc * 0.85

switch (true){
    case calc > 20000 || cantidadArt >= 10:
        document.write(`El total de su compra con descuento es igual a ${desc}`)
        break;
    case calc > 1 && calc <= 20000:
        document.write(`El precio de su compra sin descuentos es igual a ${calc}`)
        break;
    default:
        document.write("Usted no ingresó valores correctos.")
}