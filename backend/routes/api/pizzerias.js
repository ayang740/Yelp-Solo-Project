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
  "/add",
  asyncHandler(async (req, res) => {
    const pizzeria = await PizzaPlace.create(req.body);

    return res.json({
      pizzeria,
    });
  })
);




module.exports = router;