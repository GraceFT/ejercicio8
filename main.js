function calcular() {
    var num = document.getElementById("num").value;
    var diferencia = parseInt (num - 21);
    var resultado = diferencia;
    
    if (num > 21){
        resultado = (2 * diferencia);
        document.getElementById("salida").innerHTML = resultado;
    }else{
        if(num < 21){
            resultado = (-1 * diferencia);
            document.getElementById("salida").innerHTML = resultado;
        }else{
            document.getElementById("salida").innerHTML = resultado;
        }
    }
}