import {personajes} from '../data/personajes';

// console.log(personajes);

//busca en un arreglo por un indice unico menddiante la función find que tiene como un argumento una funcion
//con un objeto como parámetro
export const buscarPersonajeById = (paramSearch) => {
    return personajes.find((personaje)=>{
        return personaje.id === paramSearch;
    })
}

// console.log(buscarPersonajeById(1011031));

export const buscarPersonajeByFiltro = (paramSearch) => {
    return personajes.filter(personaje => {
        return personaje.name.startsWith(paramSearch);
    }) ;
}

// console.log(buscarPersonajeByFiltro('Ad'));