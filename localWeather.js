/* 
Elements to create
 - weather container (div)
 - temp (p)
 - icon (p)

Functions
 - fetch weather
*/

// Fetch the weather data from the API, in this case fetch a mock end point.
async function fetchWeatherAPI() {
  const weatherResponse = await fetch(
    "https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a&lat=27.987850&lon=86.925026"
  );

  const weatherData = await weatherResponse.json();
  //   return weatherData
  console.log(weatherData);
  // Created elements to add to the document
  const weatherContainer = document.createElement("div");
  const weatherTemperature = document.createElement("p");
  const weatherDescription = document.createElement("p");
  const weatherIcon = document.createElement("img");

  //   The temperature needs to be rounded down using Math.round()
  weatherTemperature.textContent = `Current Temperature: ${Math.round(
    weatherData.list[0].main.temp
  )} C`;

  weatherDescription.textContent = `Current weather: ${weatherData.list[0].weather[0].main}`;

  //   Weather Icon, can't display image at current commit
  //   weatherIcon.src = `"${weatherData.list[0].weather[0].icon}`;
  //   weatherIcon.alt = "weather icon";

  weatherContainer.appendChild(weatherTemperature);
  weatherContainer.appendChild(weatherDescription);
  //   weatherContainer.appendChild(weatherIcon);
  document.body.appendChild(weatherContainer);
}

fetchWeatherAPI();
