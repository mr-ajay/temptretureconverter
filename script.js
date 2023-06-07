function convertCelsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
      alert("Please enter a valid temperature in Celsius.");
      return;
    }
  
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }
  
  function convertFahrenheitToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(fahrenheit)) {
      alert("Please enter a valid temperature in Fahrenheit.");
      return;
    }
  
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").value = celsius.toFixed(2);
  }
  