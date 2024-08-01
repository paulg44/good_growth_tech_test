import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5009;

app.use(cors());

app.get("/weather", async (req, res) => {
  const apikey = process.env.API_KEY;
  const location = req.query.location;
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`
    );
    const data = await response.json();
    res.json(data);
    console.log(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// Feature Flag

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
