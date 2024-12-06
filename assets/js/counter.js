(function($) {

    $(document).ready(function() {
      
      // Función para actualizar el contador
      function animateCounter(element, endValue, duration, symbol = "") {
        var startValue = 0;
        var increment = endValue / duration; // Define el incremento por cada 1ms
  
        var interval = setInterval(function() {
          startValue += increment;
          element.innerText = symbol + Math.floor(startValue); // Agrega el símbolo y actualiza el valor
          if (startValue >= endValue) {
            clearInterval(interval); // Detiene la animación cuando alcanza el valor final
            element.innerText = symbol + endValue; // Asegura que el valor final sea exacto
          }
        }, 1); // Cada 1 milisegundo se incrementa el valor
      }
  
      // Configuración de los valores y los elementos HTML
      var personasImpactadas = document.querySelector(".days .value");
      var contratacionesMujeres = document.querySelector(".hours .value");
      var primerEmpleoIT = document.querySelector(".minutes .value");
      var desarrolloPotreroTech = document.querySelector(".seconds .value");
  
      // Animaciones para los valores
      animateCounter(personasImpactadas, 200, 2000, "+");  // 200 personas impactadas en 2 segundos con "+"
      animateCounter(contratacionesMujeres, 50, 2000, "%");  // 50% en 2 segundos con "%"
      animateCounter(primerEmpleoIT, 70, 2000, "%");  // 70% en 2 segundos con "%"
      animateCounter(desarrolloPotreroTech, 90, 2000, "%");  // 90% en 2 segundos con "%"
  
    });
  
  })(jQuery);