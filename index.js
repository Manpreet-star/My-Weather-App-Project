function refreshTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "30fe3f451218oete066ecab716f46558";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshTemperature);
}

function handleSearchCity(event) {
  event.preventDefault();
  let weatherCityElement = document.querySelector("#weather-city");
  let searchInput = document.querySelector("#search-input");
  weatherCityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchCity);
