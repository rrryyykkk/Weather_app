const router = require("express").Router();
const { getAll, insert } = require("../models/cities.models");

router.get("/", async (req, res) => {
  try {
    const cities = await getAll();
    res.json({ cities });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { city } = req.body;
    const result = await insert(city);
    res.json(result);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
