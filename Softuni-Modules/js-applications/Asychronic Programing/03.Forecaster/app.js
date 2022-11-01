function attachEvents() {
    // 5. fetch location date -> name, code
    // 6. code -> fetch forecast for today
    // 7. update html with forecast data
    // 8. fetch upcoming forecast 
    // 9. update html based data
    let baseUrl = `http://localhost:3030/jsonstore/forecaster`
    let inputEl = document.getElementById('location').value;
    let getButton = document.getElementById('submit');
    let current = document.getElementById('current');

    let sunny = '&#x2600'
    let partlySunny = '&#x26C5'
    let overcast = '&#x2601'
    let rain = '&#x2614'
    let degrees = '&#176'




    getButton.addEventListener('click', getWeather)
    
    async function getWeather(e){
    let response = await fetch(`${baseUrl}/locations`);
    let data = await response.json();  
    let info = data.find(x => x.name === inputEl) // found 

    createForcaster(info.code)
    }

    async function createForcaster(code){
    let responseToday = await fetch(`${baseUrl}/today/${code}`);
    let dataToday = await response.json()

    let responseUpcoming = await fetch(`${baseUrl}/upcoming/${code}`);
    let dataUpcoming = await response.json()

    createToday(dataToday)
    createUpcoming(dataUpcoming)
    }

    function createToday(data){
    
    let conditionContainer = document.createElement('div');
    conditionContainer.setAttribute("class", "forecasts")

    const conditionSymbolSpan = document.createElement('span');
    conditionSymbolSpan.setAttribute("class", "condition symbol")
    conditionSymbolSpan.textContent = "";

    const conditionSpan = document.createElement('span'); // main span 
    conditionSpan.setAttribute("class", "condition")
    conditionSpan.textContent = "";

    const nameSpan =  document.createElement('span');
    nameSpan.setAttribute("class", "forecast-data")
    nameSpan.textContent = data.name;

    const tempSpan =  document.createElement('span');
    tempSpan.setAttribute("class", "forecast-data")
    tempSpan.innerHTML = `${data.low}${degrees}/${data.high}${degrees}`

    const weatherSpan =  document.createElement('span');
    weatherSpan.setAttribute("class", "forecast-data")
    weatherSpan.textContent = data.condition


    conditionSpan.appendChild(nameSpan)
    conditionSpan.appendChild(tempSpan)
    conditionSpan.appendChild(weatherSpan)

    conditionContainer.appendChild(conditionSymbolSpan)
    conditionContainer.appendChild(conditionSpan)

    current.appendChild(conditionContainer)
    

 
        //     "barcelona": {
        //         "forecast": {
        //             "condition": "Sunny",
        //             "high": "19",
        //             "low": "11"
        //         },
        //         "name": "Barcelona, Spain"
        //     },
        //     "london": {
        //         "forecast": {
        //             "condition": "Rain",
        //             "high": "8",
        //             "low": "2"
        //         },
        //         "name": "London, UK"
        //     },
        //     "ny": {
        //         "forecast": {
        //             "condition": "Sunny",
        //             "high": "19",
        //             "low": "8"
        //         },
        //         "name": "New York, USA"
        //     }
     

    }

}
attachEvents();