import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = 5009;

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "client")));

app.get("/weather", async (req, res) => {
  const apikey = process.env.API_KEY;
  const location = "derby";
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
