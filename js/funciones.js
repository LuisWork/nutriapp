$(document).ready(function () {
    $('#example').DataTable();
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
// Evita que se envíe el formulario automáticamente
event.preventDefault();

// Valida los campos
validarCampos();
});

function validarCampos() {
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

// Verifica si los campos están vacíos
if (nombre.value.trim() === '') {
alert('Por favor, ingrese su nombre');
return;
}

if (email.value.trim() === '') {
alert('Por favor, ingrese su correo electrónico');
return;
}

if (mensaje.value.trim() === '') {
alert('Por favor, escriba un mensaje');
return;
}

// Verifica si el correo electrónico es válido
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!regexEmail.test(email.value.trim())) {
alert('Por favor, ingrese un correo electrónico válido');
return;
}

// Si todos los campos están rellenados correctamente, envía el formulario
alert('¡Formulario enviado correctamente!');
form.submit();
}
