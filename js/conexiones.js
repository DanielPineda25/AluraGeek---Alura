/* Conexión para visualizar inventario */

const productosDisponibles = () => fetch ('https://my-json-server.typicode.com/DanielPineda25/servicios/perfil').then( respuesta => respuesta.json());

/* Conexión para crear producto */

const agregarProducto = (url, categoria, nombre, precio, descripcion) => {
    return fetch ('https://my-json-server.typicode.com/DanielPineda25/servicios/perfil', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url, categoria, nombre, precio, descripcion, id: uuid.v4()}),
    });
};

/* Conexión para eliminar producto */

const eliminarProducto = (idBoton) => {
    return fetch (`https://my-json-server.typicode.com/DanielPineda25/servicios/perfil/${idBoton}`, {
        method: 'DELETE',
    });
};

/* Conexión para editar producto */

/* Primero verificamos la información que vamos a editar */

const detalleProducto = (id) => {
    return fetch(`https://my-json-server.typicode.com/DanielPineda25/servicios/perfil/${id}`)
        .then(respuesta => respuesta.json())
        .catch(error => console.error('Error:', error));
};

/* Actualizar el producto editado */

const actualizarProducto = (url, nombre, precio, categoria, descripcion, id) => {
    return fetch(`https://my-json-server.typicode.com/DanielPineda25/servicios/perfil/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url, nombre, precio, categoria, descripcion})
    })
    .then(respuesta => respuesta)
    .catch((err) => console.log(err));
};



export const conexionesServidor = {
    productosDisponibles,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};
