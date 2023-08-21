import { conexionesServidor } from "../js/conexiones.js";


const createProduct = (url, nombre, precio, id) => {

    const productoIndividual = document.createElement("div");
    productoIndividual.classList.add("articulo__individual");

    const content = 
    `<img src="${url}" alt="imagen de referencia" />
    <h3>${nombre}</h3>
    <p>$${precio}</p>
    <a href="../individuales.html?id=${id}"><input type="button" value="Ver producto"/></a>`;

    productoIndividual.innerHTML = content;

    return productoIndividual;

};

const mostradorSimilares = document.querySelector('[meta-mostrador-similares]');

conexionesServidor.productosDisponibles().then((data) => {

    data.forEach((perfil) => {

        const nuevoProducto = createProduct(perfil.url, perfil.nombre, perfil.precio, perfil.id);

        if(perfil.categoria == 'consolas'){
            
            mostradorSimilares.appendChild(nuevoProducto);

        }

    });

})

.catch((error) => console.log('Ocurrió un error'));

const createIndividual = (nombre, precio, descripcion) => {

    const productoIndividual = document.createElement("div");
    productoIndividual.classList.add("individual__descripcion");

    const content = 
    `
    <h2>${nombre}</h2>
    <p class="descripcion__precio">$${precio}</p>
    <p class="descripcion__texto">${descripcion}`;

    productoIndividual.innerHTML = content;

    return productoIndividual;

};

const mostradorDescripcion = document.querySelector('[mostrador-descripcion]');

conexionesServidor.productosDisponibles().then((data) => {

    data.forEach((perfil) => {

        const nuevaDescripcion = createIndividual(perfil.nombre, perfil.precio, perfil.descripcion);
        const urlClickeada = new URL(window.location);
        const idClickeada = urlClickeada.searchParams.get('id');
        const imagenProducto =  document.getElementById("imagen-mostrada");

        if(perfil.id == idClickeada){
            
            mostradorDescripcion.appendChild(nuevaDescripcion);
            imagenProducto.src = perfil.url;

        }

    });

})

.catch((error) => console.log('Ocurrió un error'));