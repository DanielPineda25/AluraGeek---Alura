const formularioValidador = document.querySelector('[meta-formulario-login]'); 

/* Login solamente para pruebas */

formularioValidador.addEventListener('submit', (evento) => {

    evento.preventDefault();

    const email = document.querySelector('#input-email');
    const pass = document.querySelector('#input-pass');
    const mensajeError = document.querySelector('[meta-mensaje-error]');

    if(email.value === 'usuario' && pass.value === 'pass'){

        redireccionarAPagina();
        mensajeError.textContent = "";
        email.value = "";
        pass.value = "";

    }

    else{

        mensajeError.textContent = "Usuario o contraseña incorrectos";
        email.value = "";
        pass.value = "";

    }

});

