// server.js
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const cors = require("cors");

app.use(cors()); // Allow all origins or configure for specific ones

app.get("/api/restaurants", async (req, res) => {
  try {
    const swiggyUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(swiggyUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Swiggy API response not OK");
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Swiggy fetch failed:", error.message);
    res.status(500).json({ error: "Failed to fetch data from Swiggy" });
  }
});


app.listen(5000, () => console.log("Proxy server running on port 5000"));
