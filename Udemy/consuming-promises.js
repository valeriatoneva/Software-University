const getCountryData = function(country){
    fetch(`https://restcountries.com/v2/alpha/${country}`) // promise 
    .then(response => response.json()) // in order to read it we call json, becomes a second promise
    .then(data => renderCountry(data)) // visualize data to the dom (render)
    };
getCountryData('portugal')