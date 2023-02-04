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

// Make a request to the OpenWeather API to retrieve the 5-day forecast
