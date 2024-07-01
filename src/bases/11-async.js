// peticion.then(response=> response.json()
// ).then(({data})=> {
//     const {url} = data.images.original;
//     const img = document.createElement('img');
//     img.src = url;
//     document.body.append(img);
// });

const getImagen = async () => {
    try{
        const apiKey = "js0MV3Wa2Ng88dymnYPRHl0FcUEJdgJR";
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();

        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }catch(error){
        console.error('Error in getImagen()', error);
    }
}

getImagen();