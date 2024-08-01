import { setAlternateFeatureFlag, hasFeatureFlag } from "./featureFlag.js";

// Set feature flag
setAlternateFeatureFlag("extraFeature");

const hasExtraFeature = hasFeatureFlag("extraFeature");

async function fetchWeatherAPI(location) {
  try {
    const weatherResponse = await fetch(
      `http://localhost:5009/weather?location=${location}`
    );

    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    // Instead of returning all the data to the display data function I just return the data that I need. In this case temperature, description and the icon
    const parsedWeatherData = {
      temperature: weatherData.current.temp_c,
      description: weatherData.current.condition.text,
      icon: weatherData.current.condition.icon,
      lat: weatherData.location.lat,
      lon: weatherData.location.lon,
    };

    return parsedWeatherData;
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

async function displayWeather() {
  const postcodeDiv = document.querySelector(
    "div[data-testid='place-postal-address']"
  );

  const postcode = postcodeDiv.innerHTML;

  console.log(postcode);

  const weatherData = await fetchWeatherAPI(postcode);
  console.log(weatherData);

  // Created elements to add to the document
  const weatherContainer = document.createElement("div");
  const weatherTempIconContainer = document.createElement("div");
  const weatherTemperature = document.createElement("p");
  const weatherDescription = document.createElement("p");
  const weatherLat = document.createElement("p");
  const weatherLon = document.createElement("p");
  const weatherIcon = document.createElement("img");

  //   The temperature needs to be rounded down using Math.round()
  weatherTemperature.textContent = `Current Temperature: ${weatherData.temperature} C`;

  weatherDescription.textContent = `Current weather: ${weatherData.description}`;

  weatherLat.textContent = `Lat: ${weatherData.lat}`;
  weatherLon.textContent = `Lon: ${weatherData.lon}`;

  //   Weather Icon, the mock data uses the icon code form open weather API, in this code I have parsed the icon code from the mock fetch and stored in a variable. I can then reuse this in a URL string to display the specific weather icon
  weatherIcon.src = weatherData.icon;
  weatherIcon.alt = "weather icon";

  //   Styles for all elements and weather container
  weatherContainer.style.borderTop = "2px solid black";
  weatherContainer.style.width = "auto";
  weatherContainer.style.display = "flex";
  weatherContainer.style.flexDirection = "column";
  weatherContainer.style.alignItems = "center";
  weatherContainer.style.margin = "30px";
  weatherContainer.style.zIndex = "10";

  weatherTempIconContainer.style.width = "100%";
  weatherTempIconContainer.style.display = "flex";
  weatherTempIconContainer.style.alignItems = "center";
  weatherTempIconContainer.style.justifyContent = "space-evenly";

  // Append(add) all elements to weatherContainer and in turn append the container to the body
  weatherContainer.appendChild(weatherTempIconContainer);
  weatherTempIconContainer.appendChild(weatherTemperature);
  weatherTempIconContainer.appendChild(weatherIcon);
  weatherTempIconContainer.appendChild(weatherLon);
  weatherContainer.appendChild(weatherDescription);

  // Feature Flag
  if (hasExtraFeature === "true") {
    weatherTempIconContainer.appendChild(weatherLat);
  }

  document.body.appendChild(weatherContainer);
}

displayWeather();
