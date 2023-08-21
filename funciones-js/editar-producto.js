import { conexionesServidor } from "../js/conexiones.js";

const formularioEditado = document.querySelector('[meta-formulario-crear');

const obtenerInformacion = () => {

    const urlEditable = new URL(window.location);
    const idEditable = urlEditable.searchParams.get('id');

    if(idEditable === null){
        window.location.href = '../error.html';
    };

    const urlEdit = document.querySelector('[data-input-url]');
    const categoriaEdit = document.querySelector('[data-input-categoria]');
    const nombreEdit = document.querySelector('[data-input-nombre]');
    const precioEdit = document.querySelector('[data-input-precio]');
    const descripcionEdit = document.querySelector('[data-input-descripcion]');


    conexionesServidor.detalleProducto(idEditable).then((perfil) =>{

        urlEdit.value = perfil.url;
        categoriaEdit.value = perfil.categoria;
        nombreEdit.value = perfil.nombre;
        precioEdit.value = perfil.precio;
        descripcionEdit.value = perfil.descripcion;
        
    });
};

obtenerInformacion();

formularioEditado.addEventListener('submit', (evento) =>{

    evento.preventDefault();

    const url = document.querySelector('[data-input-url]').value;
    const nombre = document.querySelector('[data-input-nombre]').value;
    const precio = document.querySelector('[data-input-precio]').value;
    const categoria = document.querySelector('[data-input-categoria]').value;
    const descripcion = document.querySelector('[data-input-descripcion]').value;

    const urlEditable = new URL(window.location);
    const idEditable = urlEditable.searchParams.get('id');

    conexionesServidor.actualizarProducto(url, nombre, precio, categoria, descripcion, idEditable).then(()=>{
        window.location.href = '../productos.html';
    });

});

