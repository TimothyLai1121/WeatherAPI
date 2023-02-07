let apiKey = "64af4cf1ecbdda50b562d1d35a8300f7";

var button = document.querySelector('.btn')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('#cityName')
var cardTempsCurrent = document.querySelector('#temperature')
var futureForecast = document.querySelector(".futureForecast");

button.addEventListener('click', function (event) {
  event.preventDefault();
  var city = inputValue.value;
  var apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      cityName.innerHTML = data.city.name;
      cardTempsCurrent.innerHTML = `Temperature: ${((data.list[0].main.temp - 273.15) * 9 / 5 + 32).toFixed(1)}°F`;

      futureForecast.innerHTML = "";
      for (var i = 0; i < data.list.length; i += 8) {
        const col = document.createElement("div");
        col.classList.add("col-md-2");
  
        const card = document.createElement("div");
        card.classList.add("card");
  
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
  
        const dayHeader = document.createElement("h5");
        dayHeader.classList.add("card-days");
        dayHeader.textContent = "Day " + (i / 8 + 1);
  
        const icon = document.createElement("i");
        /* using the appropriate class for the weather icon */
        /* you can use a switch statement to determine the class based on the weather condition */
  
        const temperature = document.createElement("p");
        temperature.classList.add("card-temps");
        temperature.textContent = `Temperature: ${((data.list[i].main.temp - 273.15) * 9 / 5 + 32).toFixed(1)}°F`;
  
        cardBody.appendChild(dayHeader);
        cardBody.appendChild(icon);
        cardBody.appendChild(temperature);
        card.appendChild(cardBody);
        col.appendChild(card);
        futureForecast.appendChild(col);
      }
    })
    .catch(error => console.error(error));
});
