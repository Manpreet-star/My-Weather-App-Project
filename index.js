function handleSearchCity(event) {
  event.preventDefault();
  let weatherCityElement = document.querySelector("#weather-city");
  let searchInput = document.querySelector("#search-input");
  weatherCityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchCity);
