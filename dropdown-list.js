// Update your JavaScript code to target each dropdown using their unique IDs

const dropdown1 = document.getElementById("dropdown1");
const selectBtn1 = dropdown1.querySelector(".select-btn");
const searchInput1 = dropdown1.querySelector("input");
const options1 = dropdown1.querySelector(".options");

const dropdown2 = document.getElementById("dropdown2");
const selectBtn2 = dropdown2.querySelector(".select-btn");
const searchInput2 = dropdown2.querySelector("input");
const options2 = dropdown2.querySelector(".options");

// Array of units
let units = ["Meter", "Kilometer", "Centimeter", "Millimeter", "Micrometer", "Nanometer", "Mile", "Yard", "Foot", "Inch"];

// Function to add units to the dropdown
function addUnit(selectedUnit, options) {
    options.innerHTML = "";
    units.forEach(unit => {
        // if selected units and units value is the same, then add selected
        let isSelected = unit == selectedUnit ? "selected" : "";
        // Adding each units inside li and inserting all li inside option tag
        let li = `<li onclick="updateName(this)" class="${isSelected}">${unit}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}

// Initial setup for both dropdowns
addUnit("", options1); // For the first dropdown
addUnit("", options2); // For the second dropdown

// Function to update the selected units
function updateName(selectedLi) {
    const currentDropdown = selectedLi.closest('.unit-container');
    const searchInput = currentDropdown.querySelector("input");
    const options = currentDropdown.querySelector(".options");
    const selectBtn = currentDropdown.querySelector(".select-btn");

    searchInput.value = "";
    addUnit(selectedLi.innerText, options);
    currentDropdown.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

// Event listener for the first dropdown
searchInput1.addEventListener("keyup", function () {
    let arr = [];
    let searchedValue = searchInput1.value.toLowerCase();
    arr = units.filter(data => {
        return data.toLowerCase().startsWith(searchedValue);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options1.innerHTML = arr ? arr : `<p>Oops! Unit not found</p>`;
});

// Event listener for the second dropdown
searchInput2.addEventListener("keyup", function () {
    let arr = [];
    let searchedValue = searchInput2.value.toLowerCase();
    arr = units.filter(data => {
        return data.toLowerCase().startsWith(searchedValue);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options2.innerHTML = arr ? arr : `<p>Oops! Unit not found</p>`;
});

// Function to close the dropdown when clicking outside
function closeDropdownOnClickOutside(event, dropdown) {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("active");
    }
}

// Event listener to toggle the dropdowns
selectBtn1.addEventListener("click", function () {
    dropdown1.classList.toggle("active");
    dropdown2.classList.remove("active");
});

selectBtn2.addEventListener("click", function () {
    dropdown2.classList.toggle("active");
    dropdown1.classList.remove("active");
});

// Event listener for clicks anywhere on the document
document.addEventListener("click", function (event) {
    closeDropdownOnClickOutside(event, dropdown1);
    closeDropdownOnClickOutside(event, dropdown2);
});