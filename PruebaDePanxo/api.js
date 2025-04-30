function obtenerChiste(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data =>{
        const chiste = data.value;
        document.getElementById('chisteArea1').value = chiste;
    })
    .catch(error =>{
        console.error('Error al obtener el chiste:',error);
    })
}

/**
 * esta es para el boton limpiar
 */
document.getElementById('clear').onclick = function(){
    document.getElementById('chisteArea1').value = '';
}