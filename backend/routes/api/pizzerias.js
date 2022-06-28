const express = require("express");
const asyncHandler = require("express-async-handler");

const { Pizzeria } = require("../../db/models/pizzeria");


const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
      const pizzerias = await Pizzeria.findAll();
      return res.json(pizzerias);
    })
  );


module.exports = router;