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

//get one pizza place
router.get(
  "/:pizzeriaId",
  asyncHandler(async (req, res) => {
    const pizzeria = await PizzaPlace.findByPk(req.params.id);
    return res.json(pizzeria);
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

//edit pizza place.
router.put(
  "/pizzeriaId",
  asyncHandler(async (req, res) => {
    const { name, openingTime, closingTime, address } =
      req.body;
    const pizzeria = await PizzaPlace.findByPk(req.params.id);

    await pizzeria.update({
      name,
      openingTime,
      closingTime,
      address,
    });

    return res.json(pizzeria);
  })
);

//delete pizza place
router.delete(
  "/:pizzeriaId",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deletePizzeria = await Pizzeria.findByPk(id);
    await deletePizzeria.destroy();
    return res.json({ id });
  })
);


module.exports = router;