const fila = document.querySelector('.contenedor-carrusel');
const peliculas = document.querySelectorAll('.pelicula');
const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');

// Eventlistenear flecha derecha

flechaderecha.addEventListener('click', () =>  {
    fila.scrollLeft += fila.offsetWidth;
    const indicadoractivo = document.querySelector('.indicadores .activ');
    if (indicadoractivo.nextSibling) {
        indicadoractivo.nextSibling.classList.add('activ');
        indicadoractivo.classList.remove('activ');
    }
});

// Eventlistenear flecha izquierda
flechaizquierda.addEventListener('click', () =>  {
    fila.scrollLeft -= fila.offsetWidth;
    const indicadoractivo = document.querySelector('.indicadores .activ');
    if (indicadoractivo.previousSibling) {
        indicadoractivo.previousSibling.classList.add('activ');
        indicadoractivo.classList.remove('activ');
    }
});

//paginacion

const numeropaginas = Math.ceil(peliculas.length) / 5;
for(let i=0; i<numeropaginas;i++){
    const indicador = document.createElement('button');

    if(i==0){
        indicador.classList.add('activ');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) =>  {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .activ').classList.remove('activ');
        e.target.classList.add('activ');
    });
}

//hover

peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) =>  {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });

});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});