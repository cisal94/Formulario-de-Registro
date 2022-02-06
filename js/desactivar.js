(function(){
    function habilitar() {
        //ACCEDEMOS A LOS ELEMENTOS DE NUESTR ARCHIVO HTML
        nombre = document.getElementById("nombre").value;
        edad = document.getElementById("edad").value;
        masculino = document.getElementById("masculino").checked;
        femenino  = document.getElementById("femenino").checked;
        direccion = document.getElementById("direccion").value;
        pais = document.getElementById("pais").value;
        estado = document.getElementById("estado").value;

        var envio = document.getElementById("envio");
    
        // CREAR VARIABLE SI SE HA SELECCIONADO ALGO
        validar = 0;
    
        // SI NO HAY NADA -> VALOR AUMENTA 1
        if (nombre == "") {
            validar++;
        } else if (edad == "") {
            validar++;        
        } else if (masculino == "" && femenino == "") {
            validar++;                
        } else if (direccion == "") {
            validar++;
        } else if (pais == "") {
            validar++;
        } else if (estado == "") {
            validar++;
        }
        if (validar == 0) {
            document.getElementById("envio").disabled = false;// DESABILITAMOS
            envio.className = 'boton';
            envio.textContent = 'enviar datos';
        } else {
            document.getElementById("envio").disabled = true;// ACTIVAMOS EL BLOQUEO
        }
    }

    document.getElementById("nombre").addEventListener("keyup", habilitar);
    document.getElementById("edad").addEventListener("keyup", habilitar);
    document.getElementById("direccion").addEventListener("keyup", habilitar);
    
    document.getElementById("masculino").addEventListener("change", habilitar);
    document.getElementById("femenino").addEventListener("change", habilitar);
    
    
    document.getElementById("pais").addEventListener("change", habilitar);
    document.getElementById("estado").addEventListener("change", habilitar);
}());