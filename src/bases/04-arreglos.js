const arreglo1 = [1,2,3,4];
const arreglo2 = [...arreglo1,5];

const arreglo3 = arreglo2.map(function(valor){
    return valor*3;
});

console.log(arreglo1);
console.log(arreglo2);
console.log(arreglo3);