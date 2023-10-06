// unit-converter
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