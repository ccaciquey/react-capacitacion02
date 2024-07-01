const persona = {
    nombre : 'Carlitos',
    apellidos : 'Cacique Yupanqui',
    edad : 42,
    profesion: 'Ingeniero',
    ide: 'Intelli IDEA',
    direccion:{
        manzana: 'J',
        distrito: 'Comas',
        provincia: 'Lima',
        departamento: 'Lima',
        pais: 'Perú'
    }
};

const getInformacion = ({nombre,apellidos,ide='Eclipse'}) => {
    return {
        nombre : nombre,
        apellidos : apellidos,
        trabajo : 'SUNAT',
        ide : ide
    }
}

const {edad,profesion,apellidos,direccion:{pais}} = persona;

console.table(getInformacion(persona));

console.log(edad,profesion,apellidos,pais);
