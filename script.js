document.addEventListener("DOMContentLoaded", function () {
    function actualizarFechaHora() {
      let fecha = new Date();
      let opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
      let opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  
      document.getElementById("fecha-hora").textContent = `${fecha.toLocaleDateString('es-ES', opcionesFecha)} - ${fecha.toLocaleTimeString('es-ES', opcionesHora)}`;
    }
  
    setInterval(actualizarFechaHora, 1000);
    actualizarFechaHora();
  
    // Manejo de navegación entre secciones
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
  });
  