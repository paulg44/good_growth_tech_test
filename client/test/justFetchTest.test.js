const justFetch = require("./justFetch");
// const nock = require("nock");

// Jest mock function for mocking a fetch requests response
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        list: [
          {
            main: { temp: 25 },
            weather: [{ main: "Cloudy", icon: "8rd" }],
          },
        ],
      }),
  })
);

test("mocks the fetch call and returns correct weather data", async () => {
  const weatherData = await justFetch();
  expect(weatherData.list[0].weather[0].main).toEqual("Cloudy");
});
// describe("expected weather data", () => {
//   beforeAll(() => {
//     nock.disableNetConnect();
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
//                 description: "Clouds",
//                 icon: "01d",
//               },
//             ],
//           },
//         ],
//       });
//   });

//   afterAll(() => {
//     nock.enableNetConnect();
//   });

//   afterEach(() => {
//     nock.cleanAll();
//   });

//   test("checks if weather API returns expected data", async () => {
//     const weatherData = await justFetch();
//     expect(weatherData.list[0].weather[0].main).toBe("Cloudy");
//   });
// });
