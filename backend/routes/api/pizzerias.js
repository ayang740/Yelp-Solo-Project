const express = require("express");
const asyncHandler = require("express-async-handler");

const { PizzaPlace } = require("../../db/models");


const router = express.Router();

//get all pizza places
router.get(
    "/",
    asyncHandler(async (req, res) => {
      const pizzerias = await PizzaPlace.findAll();
      return res.json(pizzerias);
    })
  );

//post new pizza place
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, openingTime, closingTime, address, userId } = req.body;
    const pizzeria = await PizzaPlace.create({
      name,
      openingTime,
      closingTime,
      address,
      userId
    });

    return res.json({
      pizzeria,
    });
  })
);




module.exports = router;