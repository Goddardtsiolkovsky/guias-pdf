// Función para actualizar la fecha en el encabezado
function actualizarFecha() {
    const fechaActual = new Date();
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);
    document.getElementById('fecha-actual').textContent = fechaFormateada;
  }
  
  // Llamar a la función cuando cargue la página
  actualizarFecha();
  
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
  