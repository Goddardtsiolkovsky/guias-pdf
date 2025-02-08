function actualizarFechaHora() {
  const ahora = new Date();
  
  const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);

  const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const horaFormateada = ahora.toLocaleTimeString('es-ES', opcionesHora);

  document.getElementById("fecha").textContent = fechaFormateada;
  document.getElementById("hora").textContent = horaFormateada;
}

// Actualizar la fecha y hora cada segundo
setInterval(actualizarFechaHora, 1000);

// Llamar la función inmediatamente al cargar
actualizarFechaHora();
