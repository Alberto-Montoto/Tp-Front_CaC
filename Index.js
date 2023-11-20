

function obtenerValores() {
    // Obtener los valores
    let cantidad = document.getElementById("cantidadInput").value * 2000;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").vaue;

    // Obtener la opción seleccionada en la categoría
    let categoriaSelect = document.getElementById("categoriaSelect");
    let categoria = categoriaSelect.options[categoriaSelect.selectedIndex].value;

    switch (parseInt(categoria)) {
        case 1:
            resultado = 0.2 * cantidad;
            break;
        case 2:
            resultado = 0.5 * cantidad;
            break;
        case 3:
            resultado = 0.85 * cantidad;
            break;
        default:
            resultado = 0;
            document.getElementById("datoLabel").innerText = "Total a pagar";
            break;
    }

    if (cantidad == 0 || nombre == "" || apellido == "" || email == "" || resultado == 0){
        alert ("Falta ingresar datos");
        document.getElementById("datoLabel").innerText = "Total a pagar";

    }else{
        document.getElementById("datoLabel").innerText = "$ " + resultado.toFixed(2);
    }

}

function borrarValor(){
    document.getElementById("datoLabel").innerText = "Total a pagar";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cantidadInput").value = "";
    document.getElementById("categoriaSelect").selectedIndex = 0;
}

function comprarEntrada(){
    let cantidad = document.getElementById("cantidadInput").value;
    let categoriaSelect = document.getElementById("categoriaSelect");
    let categoria = categoriaSelect.options[categoriaSelect.selectedIndex].text;

    if (cantidad == 0 || nombre == "" || apellido == "" || email == "" || resultado == 0){
        alert ("Falta ingresar datos");
        document.getElementById("datoLabel").innerText = "Total a pagar";

    }else{
        document.getElementById("datoLabel").innerText = "$ " + resultado.toFixed(2);
        document.getElementById("datoLabel").innerText = "Total a pagar";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("cantidadInput").value = "";
        document.getElementById("categoriaSelect").selectedIndex = 0;
        alert ("Usted ha comprado " + cantidad + " de entrada(s) " + categoria);
    }

    
}