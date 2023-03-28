const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  if (nombre.value.length === 0) {
    alert("Debe ingresar el nombre");
  }
  if (email === null) {
    alert("Debe ingresar el email");
  }
  if (mensaje === null) {
    alert("Debe ingresar un mensaje");
  }
});
