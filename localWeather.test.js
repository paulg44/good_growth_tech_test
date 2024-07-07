/**
 * @jest-environment jsdom
 */

const nock = require("nock");
const { fetchWeatherAPI, displayWeather } = require("./localWeather");

// describe("expected weather data", () => {
//   beforeAll(() => {
//     nock("https://europe-west1-amigo-actions.cloudfunctions.net")
//       .get("/recruitment-mock-weather-endpoint/forecast")
//       .query(true)
//       .reply(200, {
//         list: [
//           {
//             main: {
//               temp: 25,
//             },
//             weather: [
//               {
//                 main: "Cloudy",
//                 icon: "01d",
//               },
//             ],
//           },
//         ],
//       });
//   });
//   test("checks if weather API returns expected data", async () => {
//     const weatherData = await fetchWeatherAPI();
//     expect(weatherData.temperature).toEqual(25);
//   });

//   afterEach(() => {
//     nock.cleanAll();
//   });
// });

// describe("fetch weather api", () => {
//   test("fetches data", async () => {
//     global.fetch = jest.fn(() => {
//       Promise.resolve({
//         json: () => {
//           Promise.resolve({
//             list: [
//               {
//                 main: { temp: 25 },
//                 weather: [{ main: "Cloudy", icon: "8rd" }],
//               },
//             ],
//           });
//         },
//       });
//     });
//     const weatherData = await fetchWeatherAPI();

// document.body.innerHTML = `<div class="weatherContainer"></div>`;

// const weatherContainer = document.querySelector(".weatherContainer");

// expect(weatherContainer).toBeInTheDocument();
//   });
// });
