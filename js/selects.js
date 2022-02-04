var paises = ['México', 'España', 'Canadá'];

var mex = ['Ciudad de México', 'Guanajuato', 'Morelos', 'Querétaro', 'Puebla'];
var esp = ['Sevilla', 'Ciudad Real', 'Toledo', 'Valencia', 'Granada'];
var can = ['Nova Scotia', 'Ontario', 'British Columbia', 'Yukon', 'Quebec'];

var caja1 = document.getElementById('pais');//Accedemos al primer SELECT PAISES
var caja2 = document.getElementById('estado');//Accedemos al segundo SELECT ESTADOS

    function Recorrer(caja, valores) {
        caja2.innerHTML=''; //Cada vez que se ejecute limpie los estados
            for (var i = 0; i < valores.length; i++) {
                //PERMITE OBTENER EL CONTENIDO DENTRO PERO INCLUYENDO CODIGO HTML(INYJECCION DE CODIGO)
                caja.innerHTML+=`<option>${valores[i]}</option>`;//USO DE BACKTICK 
            }
    }

    function llenarPaises() {
        Recorrer(caja1, paises); //Recorremos paises que con caja y valores
    }

    llenarPaises(); //Ejecutamos la función

    caja1.addEventListener('change', (e)=> {
        var dato=e.target.value // Accedemos al valor del input
            if (dato == 'México') {
                Recorrer(caja2, mex)   
            } else if (dato == 'España') {
                Recorrer(caja2, esp)            
            } else if (dato == 'Canadá') {
                Recorrer(caja2, can)            
            }
}); 