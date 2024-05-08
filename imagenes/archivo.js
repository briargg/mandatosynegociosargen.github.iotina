document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navList = document.querySelector('.nav-list');
  
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('active'); // Agrega o quita la clase 'active' para mostrar u ocultar la lista
    });
  });


  <script>
  $(document).ready(function(){
    $('.image-container').slick({
      dots: true, // Muestra los puntos de navegación
      infinite: true, // Habilita el desplazamiento infinito
      speed: 300, // Velocidad de transición en milisegundos
      slidesToShow: 1, // Número de imágenes a mostrar simultáneamente
      adaptiveHeight: true // Ajusta automáticamente la altura del contenedor según la imagen
    });
  });
</script>