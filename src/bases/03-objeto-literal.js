const persona = {
    nombre : 'Carlos',
    apellido: 'Cacique',
    edad: 42,
    direccion:{
        ciudad: 'Lima',
        zip: 666,
        latitud: 789798,
        longitud:7878
    }
}

//Para clonar objetos a partir de otros usamos las llaves y los tres puntos
const persona2 = {...persona};

persona.nombre = 'Carlitos 001';
persona2.nombre = 'Carlitos 002';

console.log(persona);
console.log(persona2);