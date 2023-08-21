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

const sectionMostrador = document.querySelector('[meta-mostrador-starwars]');

conexionesServidor.productosDisponibles().then((data) => {

    data.forEach((perfil) => {

        const nuevoProducto = createProduct(perfil.url, perfil.nombre, perfil.precio, perfil.id);

        if(perfil.categoria == 'starwars'){
            
            sectionMostrador.appendChild(nuevoProducto);

        }

    });

})

.catch((error) => console.log(error.message));
