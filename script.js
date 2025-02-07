// Función para actualizar la fecha y hora en el encabezado
function actualizarFechaHora() {
  const fechaActual = new Date();
  const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
  const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
  document.getElementById('fecha-actual').textContent = fechaFormateada;

  const horaFormateada = fechaActual.toLocaleTimeString('es-ES');
  document.getElementById('hora-actual').textContent = horaFormateada;
}

// Llamar a la función cuando cargue la página y cada segundo
actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);

// Script para manejar la navegación entre secciones
document.querySelectorAll('.nav-bar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    document.querySelector(this.getAttribute('href')).classList.add('active');
  });
});

// Mostrar la sección de Home por defecto
document.querySelector('#home').classList.add('active');
