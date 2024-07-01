import {buscarPersonajeById} from './bases/08-import-export'

// const promesa = new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//        const personaje = buscarPersonajeById(1011031);
//        resolve(personaje);
//    },3000);
// });
//
// promesa.then((paramPrometido)=>{
//     console.log(`LLegando desde la promesa:`);
//     console.log(paramPrometido);
// });

const getPersonajeyByIdAsync = (idSearch) => {

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const personaje = buscarPersonajeById(idSearch);
            if(personaje!=null){
                resolve(personaje);
            }else{
                reject(`No se pudo encontrar el personaje con id ${idSearch}`);
            }

        },2000);
    });
    return promesa;
}

// console.log(getPersonajeyByIdAync(100));
// console.log(getPersonajeyByIdAync(1011031));
// console.log(getPersonajeyByIdAync(101));
// console.log(getPersonajeyByIdAync(102));
// console.log(getPersonajeyByIdAync(103));

getPersonajeyByIdAsync(1011031).then((personaje)=>{
    console.log(`Se encontró el personaje:`);
    console.log(personaje);
}).catch((mensajeError)=>{
    console.log(mensajeError);
});

getPersonajeyByIdAsync(666).then((personaje)=>{
    console.log(`Se encontró el personaje:`);
    console.log(personaje);
}).catch((mensajeError)=>{
    console.log(mensajeError);
});
