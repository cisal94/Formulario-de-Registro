const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,35}$/,
    edad: /^\d{2,3}$/,
    direccion: /^[a-zA-ZÀ-ÿ0-9\_\-\.\s]{10,100}$/
}

const campos = {
    nombre: false, 
    edad: false,
    direccion: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');                                    
            break;
        case "edad":
            validarCampo(expresiones.edad, e.target, 'edad');            
            break;
        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion');            
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) { // Valida si la expresion es correcta
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        
        //Elimina el mensaje de error en caso de que este todo correcto
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        
        campos[campo] = true;
    } else { // Valida si los campos son incorrectos
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        //Muestra el texto de ayuda
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); //Comprobamos los campos cuando levantamos la tecla
    input.addEventListener('blur', validarFormulario); // Comprobamos cuando el usuario de click afuera
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const masculino = document.getElementById('masculino');
    const femenino = document.getElementById('femenino');
    const pais = document.getElementById('pais');
    const estado = document.getElementById('estado');

    if (campos.nombre && campos.edad && masculino.checked != femenino.checked && campos.direccion && pais.value && estado.value) {
        formulario.reset();
        estado.innerHTML='';

        document.getElementById("envio").disabled = true;// ACTIVAMOS EL BLOQUEO
        document.getElementById("envio").classList.add('formulario__ocultar-boton');

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 6000);
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 2000);
    }
});