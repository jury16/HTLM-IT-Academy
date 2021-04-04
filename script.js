//console.log("Привет из script.js");

function setCountry() {
    let countryName = prompt('Input name of the country');
    let capitalName = prompt('Input name of the capital');
    addСountry(countryName, capitalName);
}

function getCountry(){
    let countryName = prompt('Input name of the country');
    console.log(getcountryInfo(countryName));
}

function registerCountries() {
    console.log(listСountries());
}
function clearCountry() {
    let countryName = prompt('Input name of the country to delete');
    deleteСountry(countryName);
}