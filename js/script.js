function convert() {
  var celsiusInput = document.getElementById("celsius");
  var result = document.getElementById("result");

  // Used to detect if the input is null or a string type
  if (celsiusInput.value == "") {
    alert("Please enter a valid temperature in Celsius Value");
    celsiusInput.value = "";
    return;
  } else {
    // Convert Celsius to Fahrenheit
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9) / 5 + 32;

    // Display the result, and the logic
    result.textContent = "Result : " + celsius + "°C = " + fahrenheit + "°F";
    logic.textContent =
      "How To Get " + fahrenheit + "°F : " + celsius + "°C * (9/5) + 32 ";
  }
}

// function use to clear celcius, result, and logic Value
function resetFields() {
  var celsiusInput = document.getElementById("celsius");
  var result = document.getElementById("result");

  celsiusInput.value = "";
  result.textContent = "";
  logic.textContent = "";
}
