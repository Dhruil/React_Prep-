// server.js
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const cors = require("cors");
app.use(cors());

// Constants for the API endpoints and type keys
const RESTAURANT_LIST_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
const RESTO_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=";

const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

/**
 * GET /api/restaurants
 * Proxy API to fetch restaurant list from Swiggy.
 */
app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(RESTAURANT_LIST_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Swiggy API response not OK");
    }

    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.error("Error fetching restaurant list:", error.message);
    res.status(500).json({ error: "Failed to fetch restaurant list" });
  }
});

/**
 * GET /api/restaurant/:resId
 * Proxy API to fetch detailed restaurant and menu items data by restaurant ID.
 */
app.get("/api/restaurant/:resId", async (req, res) => {
  const { resId } = req.params;

  try {
    const response = await fetch(RESTO_URL + resId, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Swiggy API failed");
    }

    const json = await response.json();

    // Extract restaurant data
    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find(
          (x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY
        )?.card?.info || null;

    // Extract menu item data
    const menuItemsData =
      json?.data?.cards
        ?.find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] === MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    // Filter out duplicate menu items if needed
    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });

    res.json({
      restaurant: restaurantData,
      menu: uniqueMenuItems,
    });
  } catch (error) {
    console.error("Error fetching restaurant details:", error.message);
    res.status(500).json({ error: "Failed to fetch restaurant details" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
