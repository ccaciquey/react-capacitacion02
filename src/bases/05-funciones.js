const saludar1 = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = (nombre) => ({
    nombre:nombre,
    apellido:'Cacique'
})


console.log(saludar1('Carlitos 1'));
console.log(saludar2('Carlitos 2'));
console.log(saludar3('Carlitos 3'));
console.log(saludar4('Carlitos 4'));