import { conexionesServidor } from "../js/conexiones.js";


const createProduct = (url, nombre, precio, id) => {

    const productoIndividual = document.createElement("div");
    productoIndividual.classList.add("articulo__individual");

    const content = 
    `<div class="articulo__imagenes">

            <img src="${url}" alt="imagen de referencia" />
            <a class="articulo__boton--eliminar" meta-boton-eliminar id="${id}"><img src="recursos/Vector-delete.png"  alt="boton eliminar"/></a>
            <a href="../edicion.html?id=${id}" class="articulo__boton--editar"><img src="recursos/Vector-edit.png" alt="boton editar" /></a>

        </div>
        
        <h3>${nombre}</h3>
        <p>$${precio}</p>
        <p class="articulo__identificador">${id}</p>`;

    productoIndividual.innerHTML = content;

    const botonEliminar = productoIndividual.querySelector('[meta-boton-eliminar]');

    botonEliminar.addEventListener('click', () => {

        const idBoton = botonEliminar.id;
        
        conexionesServidor.eliminarProducto(idBoton).then( respuesta => {
        productoIndividual.remove();
        })
        .catch((err) => alert('Ocurrió un error'));
});

    return productoIndividual;

};

const mostradorGeneral = document.querySelector('[meta-mostrador-productos]');

conexionesServidor.productosDisponibles().then((data) => {

    data.forEach((perfil) => {

        const nuevoProducto = createProduct(perfil.url, perfil.nombre, perfil.precio, perfil.id);
        mostradorGeneral.appendChild(nuevoProducto);

    });

})

.catch((error) => alert('Ocurrió un error'));