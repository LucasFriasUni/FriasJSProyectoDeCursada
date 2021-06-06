//Para la opcion de pagar en cuotas
function calculadoraDeCuotas(total, cantidadDeCuotas) {
    switch	(cantidadDeCuotas) {
        case 3:
            return total / 3;
        case 6:
            return	total / 6;
        case 9: 
            return total / 9;
        case 12: 
            return total / 12;
        default:
            return 0;
    }

}
//Para sumar el total de los precios de los items comprados
function sumarAlTotal(total, segundoNumero) {
    resultado = total + segundoNumero;
    return resultado;
}
//Para agregar el iva a un item
function sumarIva(total){
    resultado = total * 1.21;
    return resultado;
}

//En el caso de que quieran sacar un item de la lista para restarle del total
function restarAlTotal (total, precioARestar) {
    resultado = total - precioARestar;
    return resultado;
}

//En el caso de que tengan un codigo de descuento
function codigoDescuento (total, codigoDescuento){
    switch (codigoDescuento){
        case mandameAlTop10: 
            return total - 500;
        case mandameAlTop1:
            return total - 1000;
        default:
            return total;
    }
}

//Para sumarle el costo del envio
function sumarEnvio (total, lugarEnvio){
    switch (lugarEnvio){
        case MarDelPlata:
            return total + 100;
        case Argentina:
            return total + 400;
        case Internacional:
            return total + 1000;
        default:
            return total;
    }
}