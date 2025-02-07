// Función para actualizar la fecha y hora en el encabezado
function actualizarFechaHora() {
  const fechaActual = new Date();

  // Formato de fecha
  const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
  const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
  document.getElementById('fecha-actual').textContent = fechaFormateada;

  // Formato de hora
  const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const horaFormateada = fechaActual.toLocaleTimeString('es-ES', opcionesHora);
  document.getElementById('hora-actual').textContent = horaFormateada;
}

// Llamar a la función al cargar la página y actualizar cada segundo
actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);

// Script para manejar la navegación entre secciones
document.querySelectorAll('.home-box a').forEach(link => {
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
