/* Testing API  */
/*
let weatherApi = {
  "apiKey": "64af4cf1ecbdda50b562d1d35a8300f7"
}
/* api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} */
/* lat = latitude, lon = longtitude, API key which above */
/* Atlanta 33.7488° N, 84.3877° W */
/* copy and paste into browser for testing live */
/* api.openweathermap.org/data/2.5/forecast?lat={33.7488}&lon={84.3877}&appid={64af4cf1ecbdda50b562d1d35a8300f7} */
/* Invalid Code 401 - Did not Specify API Key or not activate*/
/* Testing 2nd */
/* api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key} */
/* api.openweathermap.org/data/2.5/forecast?q={Atlanta}&appid={64af4cf1ecbdda50b562d1d35a8300f7} */
/* Invalid Code 401 - Follow up */
/* Removing Bracket */ /* IMPORTANT */ /* IMPORTANT */
/* api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=64af4cf1ecbdda50b562d1d35a8300f7 */
/* cod: "200" researching */
/*
function getInfo(){
  const newName = document.getElementById("citySearch");
  const cityName = document.getElementById("cityName");
  cityName.innerHTML ="Weather in "+newName.value
}
/* clg + tab (ES6)
console.log(newName); not Defined.
console.log(cityName); Defined 
*/
/* Formatting */
/* api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={apiKey} */
let apiKey = "64af4cf1ecbdda50b562d1d35a8300f7";

var button = document.querySelector('.btn')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('#cityName')
var cardTempsCurrent = document.querySelector('#temperature')

button.addEventListener('click', function(event) {
  event.preventDefault();
  var city = inputValue.value;
  var apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      cityName.innerHTML = data.city.name;
      /* learn about deprecated so it will be switch to another name */
      /* cityName is common */
      cardTempsCurrent.innerHTML = `Temperature: ${data.list[0].main.temp}°C`;
      /* adding Celcius = Kelvin - 273.15 */
      /*
      cardTempsCurrent.innerHTML = `Temperature: ${(data.list[0].main.temp - 273.15).toFixed(1)}°C`;
      */
      /* Just in case for Fahrenheit */
       cardTempsCurrent.innerHTML = `Temperature: ${((data.list[0].main.temp - 273.15) * 9/5 + 32).toFixed(1)}°F`;


    })
    .catch(error => console.error(error));
});