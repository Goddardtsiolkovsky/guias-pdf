// Función para actualizar fecha y hora en el encabezado
function actualizarFechaHora() {
  const fechaActual = new Date();
  const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
  const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  
  const fecha = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
  const hora = fechaActual.toLocaleTimeString('es-ES', opcionesHora);
  
  document.getElementById('fecha-hora').textContent = `${fecha} - ${hora}`;
}

// Actualizar fecha y hora cada segundo
setInterval(actualizarFechaHora, 1000);
actualizarFechaHora();
