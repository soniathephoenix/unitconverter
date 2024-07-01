// Get the input element by its ID
const inputNb = document.getElementById('input')

// Get the convert button element by its ID
const convertBtn = document.getElementById("convert-btn")

// Add a click event listener to the convert button
convertBtn.addEventListener("click", function() {
    // Get the value from the input element
    const inputValue = inputNb.value;
    console.log(inputValue);

    // Get all elements with the class 'input-number' and update their text content with the input value
    const displayInput = document.querySelectorAll('.input-number');
    displayInput.forEach(element => {
        element.textContent = inputValue;
    });

    // Conversion calculations with input value, rounded to three decimal places
    const metersToFeet = (inputValue * 3.28084).toFixed(3);
    const feetToMeters = (inputValue / 3.28084).toFixed(3);
    const litersToGallons = (inputValue * 0.264172).toFixed(3);
    const gallonsToLiters = (inputValue / 0.264172).toFixed(3);
    const kilosToPounds = (inputValue * 2.20462).toFixed(3);
    const poundsToKilos = (inputValue / 2.20462).toFixed(3);

    // Update conversion results in the respective HTML elements
    document.getElementById('feet').textContent = metersToFeet;
    document.getElementById('meters').textContent = feetToMeters;
    document.getElementById('gallons').textContent = litersToGallons;
    document.getElementById('liters').textContent = gallonsToLiters;
    document.getElementById('pounds').textContent = kilosToPounds;
    document.getElementById('kilos').textContent = poundsToKilos;
});

