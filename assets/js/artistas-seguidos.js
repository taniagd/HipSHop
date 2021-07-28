
const fila = document.querySelector('.contenedor-carrusel');
const artista = document.querySelector('.artista');

const flechaIzquierda =  document.querySelector('#flecha-izquierda');
const flechaDerecha =  document.querySelector('#flecha-derecha');

flechaDerecha.addEventListener('mouseenter', () =>{
    fila.scrollLeft = fila.scrollLeft + fila.offsetWidth + 50
})


flechaIzquierda.addEventListener('mouseenter', () =>{

    fila.scrollLeft = fila.scrollLeft - fila.offsetWidth; - 50
})