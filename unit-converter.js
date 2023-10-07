// unit-converter
/*
document.addEventListener('DOMContentLoaded', function() {
    const fromUnitList = document.querySelectorAll('#fromUnit li');
    const toUnitList = document.querySelectorAll('#toUnit li');

    fromUnitList.forEach(function(item) {
        item.addEventListener('click', function() {
            fromUnitList.forEach(function(li) {
                li.classList.remove('selected');
            });
            item.classList.add('selected');
            convert();
        });
    });

    toUnitList.forEach(function(item) {
        item.addEventListener('click', function() {
            toUnitList.forEach(function(li) {
                li.classList.remove('selected');
            });
            item.classList.add('selected');
            convert();
        });
    });
});

function convert() {
    const fromValue = parseFloat(document.getElementById('fromValue').value);
    const fromUnit = getSelectedUnit('fromUnit');
    const toUnit = getSelectedUnit('toUnit');
    let result = 0;

    // Perform unit conversion
    if (fromUnit === 'meter' && toUnit === 'kilometer') {
        result = fromValue / 1000;
    } else if (fromUnit === 'kilometer' && toUnit === 'meter') {
        result = fromValue * 1000;
    } else if (fromUnit === 'foot' && toUnit === 'inch') {
        result = fromValue * 12;
    } else if (fromUnit === 'inch' && toUnit === 'foot') {
        result = fromValue / 12;
    } else if (fromUnit === 'yard' && toUnit === 'mile') {
        result = fromValue / 1760;
    } else if (fromUnit === 'mile' && toUnit === 'yard') {
        result = fromValue * 1760;
    } else {
        result = fromValue; // Default case, same unit
    }

    // Display the result
    document.getElementById('toValue').value = result;
}

function getSelectedUnit(listId) {
    const selectedUnitElement = document.getElementById(listId).querySelector('li.selected');
    return selectedUnitElement ? selectedUnitElement.getAttribute('data-unit') : '';
}
*/

document.addEventListener("DOMContentLoaded", function () {
    const fromUnitList = document.querySelectorAll("#fromUnit li");
    const toUnitList = document.querySelectorAll("#toUnit li");
    const toValue = document.getElementById("toValue");

    fromUnitList.forEach(function (item) {
      item.addEventListener("click", function () {
        fromUnitList.forEach(function (li) {
          li.classList.remove("selected");
        });
        item.classList.add("selected");
        convert();
      });
    });

    toUnitList.forEach(function (item) {
      item.addEventListener("click", function () {
        toUnitList.forEach(function (li) {
          li.classList.remove("selected");
        });
        item.classList.add("selected");
        convert();
      });
    });
  });

  function convert() {
    const fromValue = parseFloat(
      document.getElementById("fromValue").value
    );
    const fromUnit = getSelectedUnit("fromUnit");
    const toUnit = getSelectedUnit("toUnit");
    const resultContainer = document.getElementById("toValue");

    // Define unit conversions
    const conversions = {
      meter: {
        kilometer: 0.001,
        foot: 3.28084,
        inch: 39.3701,
        yard: 1.09361,
        mile: 0.000621371,
        centimeter: 100,
        millimeter: 1000,
        micrometer: 1e6,
        nanometer: 1e9,
      },
      kilometer: {
        meter: 1000,
        foot: 3280.84,
        inch: 39370.1,
        yard: 1093.61,
        mile: 0.621371,
        centimeter: 100000,
        millimeter: 1e6,
        micrometer: 1e9,
        nanometer: 1e12,
      },
      foot: {
        meter: 0.3048,
        kilometer: 0.0003048,
        inch: 12,
        yard: 0.333333,
        mile: 0.000189394,
        centimeter: 30.48,
        millimeter: 304.8,
        micrometer: 304800,
        nanometer: 304800000,
      },
      inch: {
        meter: 0.0254,
        kilometer: 2.54e-5,
        foot: 0.0833333,
        yard: 0.0277778,
        mile: 1.5783e-5,
        centimeter: 2.54,
        millimeter: 25.4,
        micrometer: 25400,
        nanometer: 25400000,
      },
      yard: {
        meter: 0.9144,
        kilometer: 0.0009144,
        foot: 3,
        inch: 36,
        mile: 0.000568182,
        centimeter: 91.44,
        millimeter: 914.4,
        micrometer: 914400,
        nanometer: 914400000,
      },
      mile: {
        meter: 1609.34,
        kilometer: 1.60934,
        foot: 5280,
        inch: 63360,
        yard: 1760,
        centimeter: 160934,
        millimeter: 1.609e6,
        micrometer: 1.609e9,
        nanometer: 1.609e12,
      },
      centimeter: {
        meter: 0.01,
        kilometer: 1e-5,
        foot: 0.0328084,
        inch: 0.393701,
        yard: 0.0109361,
        mile: 6.2137e-6,
        millimeter: 10,
        micrometer: 1e4,
        nanometer: 1e7,
      },
      millimeter: {
        meter: 0.001,
        kilometer: 1e-6,
        foot: 0.00328084,
        inch: 0.0393701,
        yard: 0.00109361,
        mile: 6.2137e-7,
        centimeter: 0.1,
        micrometer: 1e3,
        nanometer: 1e6,
      },
      micrometer: {
        meter: 1e-6,
        kilometer: 1e-9,
        foot: 3.28084e-6,
        inch: 3.937e-5,
        yard: 1.0936e-6,
        mile: 6.2137e-10,
        centimeter: 1e-4,
        millimeter: 0.001,
        nanometer: 1e3,
      },
      nanometer: {
        meter: 1e-9,
        kilometer: 1e-12,
        foot: 3.28084e-9,
        inch: 3.937e-8,
        yard: 1.0936e-9,
        mile: 6.2137e-13,
        centimeter: 1e-7,
        millimeter: 1e-6,
        micrometer: 0.001,
      },
    };

    // Perform unit conversion
    let result;
    if (fromUnit === toUnit) {
      result = fromValue; // Same unit, return the input value
    } else {
      result = fromValue * conversions[fromUnit][toUnit];
    }

    // Set the precision based on the result
    let precision = 6;
    if (Math.abs(result) >= 1) {
      precision = 2;
    } else if (Math.abs(result) >= 0.01) {
      precision = 4;
    }

    // Display the result with the calculated precision
    resultContainer.value = result.toFixed(precision); // Limit to 6 decimal places
  }

  function getSelectedUnit(listId) {
    const selectedUnitElement = document
      .getElementById(listId)
      .querySelector("li.selected");
    return selectedUnitElement
      ? selectedUnitElement.getAttribute("data-unit")
      : "";
  }