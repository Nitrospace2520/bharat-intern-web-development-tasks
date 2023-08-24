document.getElementById("convertBtn").addEventListener("click", function() {
    var temperatureInput = parseFloat(document.getElementById("temperature").value);
    var conversionType = document.querySelector('input[name="conversion"]:checked').value;

    if (!isNaN(temperatureInput)) {
        if (conversionType === "celsiusToFahrenheit") {
            var fahrenheit = (temperatureInput * 9/5) + 32;
            document.getElementById("result").innerHTML = temperatureInput + "°C is " + fahrenheit.toFixed(2) + "°F";
        } else if (conversionType === "fahrenheitToCelsius") {
            var celsius = (temperatureInput - 32) * 5/9;
            document.getElementById("result").innerHTML = temperatureInput + "°F is " + celsius.toFixed(2) + "°C";
        }
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
    }
});

