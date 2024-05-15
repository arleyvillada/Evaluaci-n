let precioOriginal = parseInt(prompt("ingresar precio original del producto"));
let porcentajeDescuento = parseInt(prompt("ingresar porcentaje de descuento"));
let descuento = (precioOriginal * porcentajeDescuento) / 100;
let precioFinal = precioOriginal - descuento;

console.log("el precio original es", precioOriginal);
console.log("el descuento es", descuento);
console.log("el precio final es", precioFinal);
