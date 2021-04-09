//console.log("Привет из script.js");

var countryName, capitalName;
function checkInput(str) {
    while (!(str) || !isNaN(str)) {
        str = prompt("input valid data! only string!");
    }
    return (str);
}
function setCountry() {
    countryName = checkInput(prompt('Input name of the country'));
    capitalName = checkInput(prompt('Input name of the capital'));
    addСountry(countryName, capitalName);
}

function getCountry(){
    countryName = checkInput(prompt('Input name of the country'));
    console.log(getcountryInfo(countryName));
}

function registerCountries() {
    console.log(listСountries());
}
function clearCountry() {
    countryName = checkInput(prompt('Input name of the country to delete'));
    deleteСountry(countryName);
}