var precio = 100;
var descuento = 30;

function precioConDescuento(precio, descuento){
    var porcentajeDescuento = 100 - descuento; 
    var precioFinal = (precio * porcentajeDescuento)/100;

    return precioFinal
}
 
function precioFinalConDescuento(){
    var inputPrecio = document.getElementById("inputPrecio");
    var valueprecio = inputPrecio.value;
    var inputDescuento = document.getElementById("inputDescuento");
    var valuedescuento = inputDescuento.value;

    var precio = precioConDescuento(valueprecio, valuedescuento);

    var precioF = document.getElementById("precioF");
   precioF.innerText ="El precio con descuento es $" + precioFinalConDescuento;

}