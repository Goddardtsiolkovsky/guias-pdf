// Función para actualizar fecha y hora
function actualizarFechaHora() {
  const fechaActual = new Date();
  
  // Formateo de fecha
  const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
  document.getElementById('fecha-actual').textContent = fechaActual.toLocaleDateString('es-ES', opcionesFecha);

  // Formateo de hora
  const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  document.getElementById('hora-actual').textContent = fechaActual.toLocaleTimeString('es-ES', opcionesHora);
}

// Actualizar fecha y hora cada segundo
setInterval(actualizarFechaHora, 1000);
actualizarFechaHora();

// Manejo de navegación entre secciones
document.querySelectorAll('.nav-button, .box ul li a').forEach(link => {
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
