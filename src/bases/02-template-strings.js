
const nombre = 'Carlos'
const apellido = 'Cacique'

const nombreCompleto = nombre + ' ' + apellido;
// const nombreCompleto2 = `Hola mundo con backticks ${nombre} y ${apellido}`;
// const nombreCompleto2 = `Hola mundo con backticks ${nombre} y ${apellido}`;
const nombreCompleto2 = `Hola mundo con 
comillas dobles y 
backtics ${nombre} y ${apellido}
calculo en otra línea ${78*5}
${ getNombre(apellido) }
`;

if(nombreCompleto.length>0){
    if(nombre.length>0 && getNombre(apellido)!=null){
        console.log("prueba de cadena de texto");
    }
}

let prueba2 = "aqui vamos a convertir al toq";

// let otraVariable = "nombre " + apellido + " aa";


// const nombreCompleto2 = nombre + ' ' + apellido;
// const nombreCompleto2 = nombre + ' ' + apellido;
// const nombreCompleto2 = nombre + ' ' + apellido;

console.log(nombreCompleto2);

function getNombre(nombreCompleto) {
    return `Hola mundo desde la funcion ${nombreCompleto}`;
}

