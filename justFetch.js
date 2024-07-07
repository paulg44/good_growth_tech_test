async function justFetch() {
  try {
    const weatherResponse = await fetch(
      "https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a&lat=27.987850&lon=86.925026"
    );

    const weatherData = await weatherResponse.json();
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

justFetch();

module.exports = justFetch;
