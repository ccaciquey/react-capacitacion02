const personajes = ['personaje1','personaje2','personaje3','personaje4'];

const [personaje123] = personajes;

const [,,per3] = personajes;

console.log(per3);

const generarArreglo = () => {
    return ['ABC',123];
}

const [letras,numeros] = generarArreglo();

console.log(letras,numeros);

const generateArrayWithFunction = (valor) => {
    return [valor,(param2)=>{console.log(`Hola mundo en desestructuracion ${param2}`)}];
};

const [nombre,consoleFunction] = generateArrayWithFunction('duolingo');
console.log(nombre);
consoleFunction('Sebas');

