
const fila = document.querySelector('.contenedor-carrusel');
const artista = document.querySelectorAll('.artista');

const flechaIzquierda =  document.querySelector('#flecha-izquierda');
const flechaDerecha =  document.querySelector('#flecha-derecha');

flechaDerecha.addEventListener('mouseenter', () =>{

    fila.scrollLeft +=  fila.offsetWidth;

    const indicadoreActivo = document.querySelector('.indicadores .activo');

    if(indicadoreActivo.nextSibling){
        indicadoreActivo.nextSibling.classList.add('activo');
        indicadoreActivo.classList.remove('activo');
    }
})

flechaDerecha.addEventListener('click', () =>{

    fila.scrollLeft +=  fila.offsetWidth;

    const indicadoreActivo = document.querySelector('.indicadores .activo');

    if(indicadoreActivo.nextSibling){
        indicadoreActivo.nextSibling.classList.add('activo');
        indicadoreActivo.classList.remove('activo');
    }
})


flechaIzquierda.addEventListener('mouseenter', () =>{

    fila.scrollLeft -= fila.offsetWidth; 

    const indicadoreActivo = document.querySelector('.indicadores .activo');

    if(indicadoreActivo.previousSibling){
        indicadoreActivo.previousSibling.classList.add('activo');
        indicadoreActivo.classList.remove('activo');
    }
})

flechaIzquierda.addEventListener('click', () =>{

    fila.scrollLeft -= fila.offsetWidth; 

    const indicadoreActivo = document.querySelector('.indicadores .activo');

    if(indicadoreActivo.previousSibling){
        indicadoreActivo.previousSibling.classList.add('activo');
        indicadoreActivo.classList.remove('activo');
    }
})

// Paginacion
const numeroPaginas = Math.ceil(artista.length / 3);

for( let i = 0; i < numeroPaginas; i++){

    const indicador = document.createElement('button');

    if(i == 0){

        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);

    indicador.addEventListener('click', (e) =>{

        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}

// Hover
artista.forEach( (artistas) => {
    
    artistas.addEventListener('mouseenter', (e) => {
        const elemento  = e.currentTarget;
        setTimeout( () =>{
            artista.forEach( (artista) => artista.classList.remove('hover'));
            elemento.classList.add('hover')
        }, 300)
    })
})