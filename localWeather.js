/* 
Elements to create
 - weather container (div)
 - container for temp and icon (div)
 - temp (p)
 - description (p)
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
  const weatherTempIconContainer = document.createElement("div");
  const weatherTemperature = document.createElement("p");
  const weatherDescription = document.createElement("p");
  const weatherIcon = document.createElement("img");

  //   The temperature needs to be rounded down using Math.round()
  weatherTemperature.textContent = `Current Temperature: ${Math.round(
    weatherData.list[0].main.temp
  )} C`;

  weatherDescription.textContent = `Current weather: ${weatherData.list[0].weather[0].main}`;

  //   Weather Icon, the mock data uses the icon code form open weather API, in this code I have parsed the icon code from the mock fetch and stored in a variable. I can then reuse this in a URL string to display the specific weather icon
  const iconCodeFromAPI = weatherData.list[0].weather[0].icon;
  weatherIcon.src = `http://openweathermap.org/img/wn/${iconCodeFromAPI}@2x.png`;
  weatherIcon.alt = "weather icon";

  //   Styles for all elements and weather container
  weatherContainer.style.borderTop = "2px solid black";
  weatherContainer.style.width = "auto";
  weatherContainer.style.display = "flex";
  weatherContainer.style.flexDirection = "column";
  weatherContainer.style.alignItems = "center";
  weatherContainer.style.margin = "30px";

  weatherTempIconContainer.style.width = "100%";
  weatherTempIconContainer.style.display = "flex";
  weatherTempIconContainer.style.alignItems = "center";
  weatherTempIconContainer.style.justifyContent = "space-evenly";

  // Append(add) all elements to weatherContainer and in turn append the container to the body
  weatherContainer.appendChild(weatherTempIconContainer);
  weatherTempIconContainer.appendChild(weatherTemperature);
  weatherTempIconContainer.appendChild(weatherIcon);
  weatherContainer.appendChild(weatherDescription);
  document.body.appendChild(weatherContainer);
}

fetchWeatherAPI();
