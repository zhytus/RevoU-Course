//Used To Convert Celcius To Fahrenheit
function convertCelcius() {
  var celciusInput = document.getElementById("input");
  var result = document.getElementById("result");

  // Used to detect if the input is null or a string type
  if (celciusInput.value === "" || isNaN(celciusInput.value)) {
    alert("Please enter a valid temperature in Celcius Value");
    resetFields();
    return;
  } else {
    // Convert Celcius to Fahrenheit
    var celcius = parseFloat(celciusInput.value);
    var fahrenheit = (celcius * 9) / 5 + 32;

    // Display the result, and the logic
    result.textContent = "Result : " + celcius + "°C = " + fahrenheit + "°F";
    logic.textContent =
      "How To Get " + fahrenheit + "°F : " + celcius + "°C * (9/5) + 32 ";
  }
}

function reverseCelcius() {
  // Reverse To Celcius
  location.reload();
}

//Used to change from "Celcius To Fahrenheit" to "Fahrenheit To Celcius"
function reverseFahrenheit() {
  resetFields();
  var fahrenheitInput = document.getElementById("input");
  var label = document.querySelector('label[for="input"]');
  var convertButton = document.querySelector(
    'button[onclick="convertCelcius()"]'
  );
  var reverseButton = document.querySelector(
    'button[onclick="reverseFahrenheit()"]'
  );

  // Change Label and Input Placeholder to Fahrenheit
  label.textContent = "Fahrenheit:";
  fahrenheitInput.placeholder = "Enter temperature in Fahrenheit";

  // Change Event "onClick" for Convert and Reverse Button
  convertButton.setAttribute("onclick", "convertFahrenheit()");
  reverseButton.setAttribute("onclick", "reverseCelcius()");
}

//Used To Convert Fahrenheit To Celcius
function convertFahrenheit() {
  var fahrenheitInput = document.getElementById("input");
  var result = document.getElementById("result");
  var logic = document.getElementById("logic");

  // Check if Fahrenheit input is empty or not a number
  if (fahrenheitInput.value === "" || isNaN(fahrenheitInput.value)) {
    alert("Please enter a valid temperature in Fahrenheit.");
    return;
  }

  // Convert Fahrenheit to Celcius
  var fahrenheit = parseFloat(fahrenheitInput.value);
  var celcius = ((fahrenheit - 32) * 5) / 9;

  // Display the result
  result.textContent = "Result: " + fahrenheit + "°F = " + celcius + "°C";
  logic.textContent =
    "How To Get " + celcius + "°C: (" + fahrenheit + "°F - 32) * 5/9";
}

// function use to clear input, result, and logic Value
function resetFields() {
  var Input = document.getElementById("input");
  var result = document.getElementById("result");
  var logic = document.getElementById("logic");

  Input.value = "";
  result.textContent = "";
  logic.textContent = "";
}
