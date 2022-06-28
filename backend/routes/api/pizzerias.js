const express = require("express");
const asyncHandler = require("express-async-handler");

const { PizzaPlace } = require("../../db/models");


const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
      const pizzerias = await PizzaPlace.findAll();
      return res.json(pizzerias);
    })
  );


module.exports = router;