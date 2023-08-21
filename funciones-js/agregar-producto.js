import { conexionesServidor } from "../js/conexiones.js";

const formularioCrear =  document.querySelector('[meta-formulario-crear]');

formularioCrear.addEventListener('submit', (evento) => {

    evento.preventDefault();

    const inputUrl = document.querySelector('[data-input-url]').value;
    const inputCategoria = document.querySelector('[data-input-categoria]').value;
    const inputNombre = document.querySelector('[data-input-nombre]').value;
    const inputPrecio = document.querySelector('[data-input-precio]').value;
    const inputDescripcion = document.querySelector('[data-input-descripcion]').value;

    conexionesServidor.agregarProducto(inputUrl, inputCategoria, inputNombre, inputPrecio, inputDescripcion).then(respuesta => {
        window.location.href='../productos.html';
    })
    .catch((err) => console.log(err));

});




